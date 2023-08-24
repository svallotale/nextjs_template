FROM node:16-alpine AS development

WORKDIR /web_client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "prod"]

