# Usa una imagen de Maven con Eclipse Temurin OpenJDK 17
FROM maven:3.8.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copia el archivo pom.xml primero para permitir que Docker cachee la descarga de dependencias
COPY pom.xml .
RUN mvn dependency:go-offline

# Copia el código fuente y construye el proyecto
COPY src ./src
RUN mvn clean package -DskipTests

# Etapa de producción
FROM eclipse-temurin:17-jdk-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copia el JAR construido desde la etapa de construcción anterior
COPY --from=build /app/target/demo-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto en el que correrá la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación Spring Boot
ENTRYPOINT ["java","-jar","/app/app.jar"]
