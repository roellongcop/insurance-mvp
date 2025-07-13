FROM node:18-alpine
WORKDIR /app
COPY package*.json next.config.js ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
