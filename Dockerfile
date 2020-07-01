FROM node:12.14.0-alpine

ARG APP_NAME
ARG BRAND_ID

ENV APP_NAME=$APP_NAME
ENV BRAND_ID=$BRAND_ID

RUN apk update && apk add --no-cache hunspell python g++ make

WORKDIR /usr/src/app

COPY build/package*.json ./
COPY build/ .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
