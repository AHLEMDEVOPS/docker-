FROM node:10.14.2

WORKDIR /opt

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 8080
CMD ["npm", "start"]
