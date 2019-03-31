FROM node:10-slim

ENV \
  PORT=8000 \
  WORLD=World

EXPOSE ${PORT}

WORKDIR /app

COPY package.json package-lock.json index.js /app/

RUN npm ci

CMD ["node", "index.js"]
