FROM mhart/alpine-node:16.13.2

WORKDIR /backend

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["yarn", "start"]