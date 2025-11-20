FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

# Copy Maven wrapper và pom.xml trước để cache dependencies
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# Give permission cho mvnw
RUN chmod +x mvnw

# Download dependencies trước để cache
RUN ./mvnw dependency:go-offline -B

# Copy toàn bộ source code
COPY src ./src

# Build ứng dụng
RUN ./mvnw package -DskipTests

# Run stage
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Start ứng dụng với wait time để MySQL khởi động hoàn toàn
ENTRYPOINT ["java", "-jar", "app.jar"]