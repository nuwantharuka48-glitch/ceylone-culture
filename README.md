# CEYLONE CULTURE - Restaurant Management System

An elegant, premium, and fully integrated Restaurant Management System designed for **Ceylone Culture**—a fictional luxury Sri Lankan restaurant celebrating heritage and spice.

The system is designed as a highly responsive Single Page Application (SPA) utilizing a stunning **glassmorphic dark/gold theme**, featuring advanced calculations, dynamic form validations, a simulated AI Promotion copywriter, and an on-demand billing Invoice Generator.

---

## 🌟 Key Features

1. **Dashboard Analytics**: Real-time counter metrics tracking daily revenue, active orders queue, catering bookings, and active campaigns.
2. **Order Management**: Interactive, classified menu card (Hoppers, Claypot Curries, Devilled specialties, Ceylon Teas). Integrates a dynamic checkout cart calculating 10% VAT, 10% Service Charge, and custom AI promo code discounts.
3. **Bulk Event Booking**: Specialized booking registry for catering and banquets (min 20 guests, max 500) supporting tiered rates (*Silver*, *Gold*, *Royal* packages) and calculating mandatory 20% down-payment deposits with strict future-date and Sri Lankan mobile number validation.
4. **AI Promotion Hub**: Custom promotional planning dashboard. The simulated deep-learning engine outputs engaging, culturally-rich marketing copy, catchy social media headlines, price optimization tips, and unique coupon codes which can be deployed instantly to live standard orders.
5. **Branded Invoice Generator**: Generates clean, beautifully-styled business invoices. Features click-to-print/PDF-save capabilities with complete `@media print` style sheets (which hide dashboards/toolbars during printing, leaving only a perfect paper receipt page). Imports transactions from both standard and bulk orders with a single click.

---

## 📂 Project Directory Structure

```
ceylone-culture/
├── frontend/
│   ├── index.html        # SPA Layout framework (HTML5)
│   ├── styles.css        # Premium custom dark/gold glassmorphic CSS
│   ├── app.js            # Unified state controller, local storage & REST API sync
│   └── validation.js     # Live glowing validator engine (JS)
├── backend/
│   ├── CeyloneCultureServer.java  # Zero-dependency Standalone Java REST API
│   └── README.md         # Dedicated server compile & run guide
└── README.md             # Core project documentation (This file)
```

---

## 🚀 How to Run the Program

### Quick Start: Run the Frontend (Offline/Demo Mode)
The application includes a robust **Local Storage Fallback (Offline Mode)**, allowing the frontend to run with **all features fully enabled** instantly without needing a server!
1. Double-click the file at [frontend/index.html](file:///C:/Users/MSI/.gemini/antigravity/scratch/ceylone-culture/frontend/index.html) to open it in any web browser (Chrome, Edge, Firefox, Safari).
2. The bottom-left status bar will read **"System Demo Mode"** in amber.
3. You can place standard orders, apply coupons, register bulk events, run the AI promoter, and generate/print invoices. All data will persist locally in your browser cache!

---

### Step 2: Compile & Run the Java REST API Server
To connect the client to a real database server backend, run the Java REST API server. You must have the **Java Development Kit (JDK)** installed.

1. Open **Command Prompt** or **PowerShell**.
2. Navigate to this project root directory:
   ```powershell
   cd "C:\Users\MSI\.gemini\antigravity\scratch\ceylone-culture"
   ```
3. Compile the Java server class:
   ```powershell
   javac backend/CeyloneCultureServer.java
   ```
4. Run the compiled Java bytecode class:
   ```powershell
   java backend.CeyloneCultureServer
   ```
5. You will see a starting banner stating **`Running on: http://localhost:8080`**.
6. **Refresh** your opened browser page (`index.html`). The bottom-left status indicator will instantly glow **green** and say **"Connected to Java Backend"**.
7. All data is now fully synchronized with your Java REST API server's thread-safe in-memory database!

---

## 🛠️ Testing Validation Scenarios to Try

- **Standard Dine-In Validation**: Select "Dine-In" in your cart and try entering a table number like `99`. The system will block submission and glow red, requesting a number between `1` and `30`.
- **Bulk Date Validation**: In Bulk Orders, select a date in the past or today. The system will alert you that bookings must be scheduled in the future.
- **Bulk Guest Capacity**: Try typing `10` guests for a banquet. It will alert you that catering events require a minimum capacity of `20` guests.
- **AI Deployed Discount**: Go to the **AI Promotion Hub**, select *Friday Kottu Night* and click *Run AI Campaign*. Once generated, copy the promo code `KOTTUNIGHT15` and click *Deploy*. Go back to **Order Management**, add items to your cart, type `KOTTUNIGHT15` in the coupon bar, and click *Apply*. A 15% discount will be instantly calculated on your grand total!
- **Invoice Printing**: Select any transaction from the invoice page dropdown, click *Print / Save PDF*. Your browser print dialog will open showing a clean, white, professionally-bordered business receipt with no headers, sidebars, or dark background colors.
