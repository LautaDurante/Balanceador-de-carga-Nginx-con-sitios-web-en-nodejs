FROM node:18-alpine

WORKDIR /back2

COPY package.json*.json ./

RUN  npm install

COPY  . .

EXPOSE 80

CMD [ "npm","start" ]