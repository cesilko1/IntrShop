FROM mhart/alpine-node:14.15.0

WORKDIR /backend

COPY ./ ./

RUN yarn
RUN yarn build

CMD ["yarn", "start"]