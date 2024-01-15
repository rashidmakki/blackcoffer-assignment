FROM node:19.0.1

WORKDIR /app

COPY ./client/package*.json .

RUN npm install

COPY ./client/ .

CMD ["npm","run","dev"]