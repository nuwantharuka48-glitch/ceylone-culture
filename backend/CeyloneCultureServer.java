package backend;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.Executors;

/**
 * Ceylone Culture - Restaurant Management System REST Server
 * A zero-dependency, ultra-lightweight standalone Java API server.
 * Uses Java's built-in com.sun.net.httpserver.HttpServer.
 */
public class CeyloneCultureServer {

    // Check if the cloud environment has assigned a port, otherwise fallback to 8080
	int port = System.getenv("PORT") != null ? Integer.parseInt(System.getenv("PORT")) : 8080;

// Example initialization (adjust based on your actual server code)
	HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
    
    // Thread-safe in-memory data store for JSON payloads
    private static final List<String> orders = new CopyOnWriteArrayList<>();
    private static final List<String> bulkOrders = new CopyOnWriteArrayList<>();
    private static final List<String> promotions = new CopyOnWriteArrayList<>();

    public static void main(String[] args) throws IOException {
        // Initialize HttpServer on port 8080
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);
        
        // Define REST Endpoint contexts
        server.createContext("/", new RootHandler());
        server.createContext("/api/status", new StatusHandler());
        server.createContext("/api/orders", new OrdersHandler());
        server.createContext("/api/orders/status", new OrderStatusHandler());
        server.createContext("/api/bulk-orders", new BulkOrdersHandler());
        server.createContext("/api/promotions", new PromotionsHandler());

        // Assign executor thread pool for handling concurrent requests
        server.setExecutor(Executors.newCachedThreadPool());
        
        System.out.println("=================================================");
        System.out.println("   CEYLONE CULTURE - RESTAURANT BACKEND REST API ");
        System.out.println("=================================================");
        System.out.println("Server is starting up...");
        System.out.println("Running on: http://localhost:" + PORT);
        System.out.println("Endpoints available:");
        System.out.println("  - GET  /                     (Browser Landing & Instructions)");
        System.out.println("  - GET  /api/status");
        System.out.println("  - GET  /api/orders      | POST /api/orders");
        System.out.println("  - POST /api/orders/status");
        System.out.println("  - GET  /api/bulk-orders | POST /api/bulk-orders");
        System.out.println("  - GET  /api/promotions  | POST /api/promotions");
        System.out.println("Press Ctrl+C to stop the server.");
        System.out.println("=================================================");
        
        server.start();
    }

    // --- Helper for CORS Headers ---
    private static void setCorsHeaders(HttpExchange exchange) {
        exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    }

    // --- Helper to read Request Body ---
    private static String readRequestBody(HttpExchange exchange) throws IOException {
        InputStreamReader reader = new InputStreamReader(exchange.getRequestBody(), StandardCharsets.UTF_8);
        BufferedReader br = new BufferedReader(reader);
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            sb.append(line);
        }
        return sb.toString();
    }

    // --- Helper to Send JSON Response ---
    private static void sendResponse(HttpExchange exchange, int statusCode, String responseJson) throws IOException {
        setCorsHeaders(exchange);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        byte[] bytes = responseJson.getBytes(StandardCharsets.UTF_8);
        exchange.sendResponseHeaders(statusCode, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    // --- OPTIONS Handler for Pre-flight Requests ---
    private static boolean handleOptionsRequest(HttpExchange exchange) throws IOException {
        if ("OPTIONS".equalsIgnoreCase(exchange.getRequestMethod())) {
            setCorsHeaders(exchange);
            exchange.sendResponseHeaders(204, -1); // 204 No Content
            return true;
        }
        return false;
    }

    // --- Handlers Implementation ---

    /**
     * Context: GET /
     * Friendly root handler for browser access
     */
    static class RootHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptionsRequest(exchange)) return;

            // Serve a beautiful, gold-themed HTML page instructing the user
            String responseHtml = "<!DOCTYPE html>\n" +
                    "<html>\n" +
                    "<head>\n" +
                    "    <title>Ceylone Culture REST Server</title>\n" +
                    "    <style>\n" +
                    "        body { background-color: #0a0c10; color: #f1f5f9; font-family: 'Inter', -apple-system, sans-serif; text-align: center; padding: 50px; }\n" +
                    "        .card { max-width: 600px; margin: 0 auto; background: rgba(22, 26, 33, 0.7); border: 1px solid rgba(207, 162, 70, 0.2); padding: 40px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.6); }\n" +
                    "        h1 { color: #cfa246; font-family: 'Playfair Display', Georgia, serif; font-size: 2.2rem; margin-bottom: 10px; }\n" +
                    "        h2 { color: #e29543; font-size: 1.1rem; margin-top: 0; text-transform: uppercase; letter-spacing: 2px; font-weight: 500; }\n" +
                    "        p { color: #94a3b8; line-height: 1.6; margin: 20px 0; }\n" +
                    "        .instructions { background: rgba(0,0,0,0.3); border-left: 3px solid #cfa246; padding: 15px; text-align: left; border-radius: 4px; font-size: 0.9rem; }\n" +
                    "        .path { color: #cfa246; font-weight: bold; }\n" +
                    "        .badge { background: #10b981; color: #0a0c10; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 0.75rem; }\n" +
                    "    </style>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "    <div class='card'>\n" +
                    "        <h1>CEYLONE CULTURE</h1>\n" +
                    "        <h2>REST API Engine <span class='badge'>ONLINE</span></h2>\n" +
                    "        <p>The backend server is running successfully on port 8080!</p>\n" +
                    "        <div class='instructions'>\n" +
                    "            <strong>How to open the Restaurant Management System:</strong><br>\n" +
                    "            1. Minimize this browser window.<br>\n" +
                    "            2. Open your file explorer and navigate to:<br>\n" +
                    "               <span class='path'>C:\\Users\\MSI\\.gemini\\antigravity\\scratch\\ceylone-culture\\frontend\\</span><br>\n" +
                    "            3. Double-click on <span class='path'>index.html</span> to load the premium visual dashboard!<br><br>\n" +
                    "            <em>The dashboard will automatically hook into this running API server.</em>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</body>\n" +
                    "</html>";

            setCorsHeaders(exchange);
            exchange.getResponseHeaders().set("Content-Type", "text/html; charset=utf-8");
            byte[] bytes = responseHtml.getBytes(StandardCharsets.UTF_8);
            exchange.sendResponseHeaders(200, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }
    }

    /**
     * Context: GET /api/status
     */
    static class StatusHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptionsRequest(exchange)) return;
            
            if ("GET".equalsIgnoreCase(exchange.getRequestMethod())) {
                String response = "{\"status\":\"online\",\"system\":\"Ceylone Culture REST API Server\",\"version\":\"1.0.0\"}";
                sendResponse(exchange, 200, response);
            } else {
                sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    /**
     * Context: GET /api/orders | POST /api/orders
     */
    static class OrdersHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptionsRequest(exchange)) return;

            String method = exchange.getRequestMethod();
            if ("GET".equalsIgnoreCase(method)) {
                // Combine stored raw JSON orders into a standard JSON Array
                String response = "[" + String.join(",", orders) + "]";
                sendResponse(exchange, 200, response);
                
            } else if ("POST".equalsIgnoreCase(method)) {
                String body = readRequestBody(exchange);
                if (body != null && !body.trim().isEmpty()) {
                    orders.add(0, body); // Prepend to orders list
                    System.out.println("--> Received New Standard Order: " + body);
                    sendResponse(exchange, 201, "{\"message\":\"Order saved successfully\"}");
                } else {
                    sendResponse(exchange, 400, "{\"error\":\"Invalid JSON body\"}");
                }
            } else {
                sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    /**
     * Context: POST /api/orders/status
     * Used to advance order statuses from 'Preparing' -> 'Ready' -> 'Served'
     */
    static class OrderStatusHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptionsRequest(exchange)) return;

            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                String body = readRequestBody(exchange);
                System.out.println("--> Status Update Requested: " + body);

                // Quick mock-parsing logic for {"id":"...", "status":"..."}
                String orderId = extractJsonValue(body, "id");
                String newStatus = extractJsonValue(body, "status");

                if (orderId != null && newStatus != null) {
                    boolean found = false;
                    for (int i = 0; i < orders.size(); i++) {
                        String orderStr = orders.get(i);
                        if (orderStr.contains("\"id\":\"" + orderId + "\"")) {
                            // Simple text replacement within JSON string
                            String updated = orderStr.replaceFirst("\"status\":\"[^\"]+\"", "\"status\":\"" + newStatus + "\"");
                            orders.set(i, updated);
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        sendResponse(exchange, 200, "{\"message\":\"Order status updated successfully\"}");
                    } else {
                        sendResponse(exchange, 404, "{\"error\":\"Order not found\"}");
                    }
                } else {
                    sendResponse(exchange, 400, "{\"error\":\"Invalid parameters\"}");
                }
            } else {
                sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    /**
     * Context: GET /api/bulk-orders | POST /api/bulk-orders
     */
    static class BulkOrdersHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptionsRequest(exchange)) return;

            String method = exchange.getRequestMethod();
            if ("GET".equalsIgnoreCase(method)) {
                String response = "[" + String.join(",", bulkOrders) + "]";
                sendResponse(exchange, 200, response);
                
            } else if ("POST".equalsIgnoreCase(method)) {
                String body = readRequestBody(exchange);
                if (body != null && !body.trim().isEmpty()) {
                    bulkOrders.add(0, body);
                    System.out.println("--> Received New Bulk Catering Booking: " + body);
                    sendResponse(exchange, 201, "{\"message\":\"Event booked successfully\"}");
                } else {
                    sendResponse(exchange, 400, "{\"error\":\"Invalid JSON body\"}");
                }
            } else {
                sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    /**
     * Context: GET /api/promotions | POST /api/promotions
     */
    static class PromotionsHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            if (handleOptionsRequest(exchange)) return;

            String method = exchange.getRequestMethod();
            if ("GET".equalsIgnoreCase(method)) {
                String response = "[" + String.join(",", promotions) + "]";
                sendResponse(exchange, 200, response);
                
            } else if ("POST".equalsIgnoreCase(method)) {
                String body = readRequestBody(exchange);
                if (body != null && !body.trim().isEmpty()) {
                    promotions.add(0, body);
                    System.out.println("--> Deployed New AI Campaign Coupon: " + body);
                    sendResponse(exchange, 201, "{\"message\":\"Campaign deployed successfully\"}");
                } else {
                    sendResponse(exchange, 400, "{\"error\":\"Invalid JSON body\"}");
                }
            } else {
                sendResponse(exchange, 405, "{\"error\":\"Method Not Allowed\"}");
            }
        }
    }

    // --- Super Simple JSON String Extractor ---
    private static String extractJsonValue(String json, String key) {
        String pattern = "\"" + key + "\":\"";
        int start = json.indexOf(pattern);
        if (start == -1) return null;
        start += pattern.length();
        int end = json.indexOf("\"", start);
        if (end == -1) return null;
        return json.substring(start, end);
    }
}
