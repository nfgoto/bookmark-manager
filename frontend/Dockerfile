FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build

## RUN STAGE ##

FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app/
COPY --from=build /app/package*.json ./
RUN npm ci --production
COPY --from=build /app/build/ ./build
COPY --from=build /app/server/ ./server
RUN ls -la
RUN chown -R node:node /app/
CMD [ "node", "./server" ]