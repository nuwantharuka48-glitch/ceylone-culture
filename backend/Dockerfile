# Use an official lightweight Java runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all repository files into the container
COPY . /app/

# Move into the backend folder where the Java server lives
WORKDIR /app/backend

# Compile the standalone server file
RUN javac CeyloneCultureServer.java

# Expose the port your server binds to dynamically
EXPOSE 8080

# Run the server
CMD ["java", "CeyloneCultureServer"]
