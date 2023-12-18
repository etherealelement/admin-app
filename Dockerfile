FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY public public
COPY src src
RUN npm run build

RUN npm install --global serve
CMD serve -s build
