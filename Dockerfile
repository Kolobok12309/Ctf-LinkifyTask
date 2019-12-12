FROM node:10-alpine

ENV CTF_STAGE="docker"

RUN apk add yarn

WORKDIR /usr/src/app
COPY package*.json yarn.lock ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]
