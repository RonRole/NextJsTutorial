FROM node:slim

RUN mkdir /app && mkdir /app/nextjs-blog

COPY ./app /app

WORKDIR /app/nextjs-blog

RUN npm install
