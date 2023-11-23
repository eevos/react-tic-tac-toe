#Development stage
FROM node:latest AS development

WORKDIR /app

COPY package*.json ./
RUN npm install

# Declare a volume to be mounted during runtime
VOLUME ["/app"]

COPY . .
EXPOSE 3000
CMD ["npm","start"]

#Productoin stage
FROM node:latest AS production

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

RUN npm run build

FROM nginx:latest

RUN apt-get update && apt-get install -y nginx

COPY --from=production /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
