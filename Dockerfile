FROM node:20 as builder
RUN mkdir /mentor_hub_ui
WORKDIR /mentor_hub_ui
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as server
COPY ./nginx_config/conf.d/default.conf /etc/nginx/conf.d/
COPY --from=builder /mentor_hub_ui/dist /usr/share/nginx/html