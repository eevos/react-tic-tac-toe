#Development stage
FROM node:latest AS development

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["npm","start"]

#Productoin stage
FROM node:latest AS production

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest

COPY --from=production /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
