FROM node:10-alpine

ENV CTF_STAGE="docker"

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

VOLUME /usr/src/pages

EXPOSE 8080
