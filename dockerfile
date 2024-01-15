FROM node:19.0.1

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000 

CMD ["npm","run","server"]