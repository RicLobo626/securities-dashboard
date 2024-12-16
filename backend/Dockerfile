FROM node:22

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci && npm run build

USER node

CMD npm run migrate:deploy && npm start