FROM node:slim

RUN mkdir /app && mkdir /app/src

WORKDIR /app
COPY /app/package.json .
COPY /app/package-lock.json .
COPY /app/src ./src

RUN npm install

