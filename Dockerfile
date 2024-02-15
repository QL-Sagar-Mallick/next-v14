FROM node:20-alpine3.18

WORKDIR /next-app

COPY public/ /next-app/public
COPY src/ /next-app/src
COPY package.json /next-app/

RUN yarn set version stable
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["yarn", "dev"]
