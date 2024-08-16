FROM node:16-alpine AS build

WORKDIR /web

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /web/build /usr/share/nginx/html

RUN  sed -i '12a error_page 404 /index.html;' /etc/nginx/conf.d/default.conf
