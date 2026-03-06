FROM node:22.15-alpine as deps

ARG NPM_TOKEN

ENV NODE_ENV=development

WORKDIR /app
COPY package.json yarn.lock .env.local ./
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /app/.npmrc

RUN yarn

FROM node:22.15-alpine as builder

ARG NPM_TOKEN

ENV NODE_ENV=production
ENV PATH $PATH:/app/node_modules/.bin

WORKDIR /app
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > /app/.npmrc
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

#Clean node_modules with production NODE_ENV
RUN yarn 

FROM node:22.15-alpine as runner

ENV NODE_ENV=production
ENV PATH $PATH:/app/node_modules/.bin
RUN yarn global add pm2

WORKDIR /app

COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/.next .next
COPY --from=builder /app/next-i18next.config.js next-i18next.config.js
COPY --from=builder /app/next.config.js next.config.js
COPY --from=builder /app/public public

RUN chown -R node:node .next

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "next", "--", "start" ]