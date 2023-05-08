FROM openjdk:17-jdk-slim

WORKDIR /app
COPY ./target/server-0.0.1-SNAPSHOT.jar .

EXPOSE 8081

CMD ["java", "-jar", "server-0.0.1-SNAPSHOT.jar"]