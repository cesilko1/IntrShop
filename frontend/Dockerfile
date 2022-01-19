#build environment
FROM node:16.13.2-alpine3.15 as build
WORKDIR /frontend
COPY ./ ./
RUN yarn
RUN yarn build
RUN yarn gzip

#production
FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]