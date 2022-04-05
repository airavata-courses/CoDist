FROM node:17.8.0-buster
WORKDIR /app
COPY . .
COPY example.env .env
RUN npm install
CMD npm run start
