FROM node:14-alpine as build
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --silent

COPY . .
RUN yarn genetate

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
