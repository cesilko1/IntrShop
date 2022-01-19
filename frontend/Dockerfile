#build environment
FROM mhart/alpine-node:14.15.0 as build
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