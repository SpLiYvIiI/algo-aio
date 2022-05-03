FROM node:16-alpine3.12 as build

WORKDIR /app

COPY . .

ENV GENERATE_SOURCEMAP=false

RUN npm install && npm run build

FROM node:16-alpine3.12

ARG PORT=5000

ENV DEFAULTORPORT=${PORT}

EXPOSE ${DEFAULTORPORT}

WORKDIR /app

RUN mkdir build

COPY --from=build ./app/build ./build

RUN npm install -g serve && adduser -S client &&  \
    chown client: /app && chmod 700 /app 

USER client

CMD serve -s -l ${DEFAULTORPORT} build