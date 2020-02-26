FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build pwa-extension

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/apps/pwa-extension /usr/share/nginx/html
COPY --from=build-stage /app/apps/pwa-extension/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
