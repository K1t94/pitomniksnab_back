FROM node:12.18-alpine

RUN apk add --no-cache curl nano
RUN curl -o- -L https://yarnpkg.com/install.sh | sh
RUN mkdir /app
COPY ./ /app
WORKDIR /app
RUN yarn install --no-cache --frozen-lockfile --productions

ADD ./docker/nodejs/run.sh /app/run.sh
RUN chmod +x /app/run.sh

WORKDIR /app

CMD ["./run.sh"]