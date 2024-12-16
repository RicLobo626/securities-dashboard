FROM node:22 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:latest

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html