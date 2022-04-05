FROM node:17.8.0-buster
COPY . /app/
WORKDIR /app
RUN npm install
CMD npm run start
