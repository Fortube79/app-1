FROM node:18-alpine

WORKDIR /app

# Copiar package.json y package-lock.json e instalar dependencias d
COPY package*.json ./
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Ejecutar el build
RUN npm run build

# Instalar el servidor de producción
RUN npm install -g serve

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar el servidor de producción
CMD ["serve", "-s", "build"]