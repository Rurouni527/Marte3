FROM node:14.18.0

#crear repositorio para aplicacion
WORKDIR /usr/src/app

#instalacion de dependencias
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD ["node", "src/server.js"]