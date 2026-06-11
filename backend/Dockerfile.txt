# Use an official lightweight Java runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy all files from the repository root directly into the container
COPY . /app/

# Compile the standalone server file directly at the root level
RUN javac CeyloneCultureServer.java

# Expose the port your server binds to dynamically
EXPOSE 8080

# Run the server
CMD ["java", "CeyloneCultureServer"]
