FROM node:lts-alpine AS build
ARG REACT_APP_API_HOST
ARG REACT_APP_API_PORT
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
ENV REACT_APP_API_PORT=${REACT_APP_API_PORT}
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
# RUN chown -R node:node /app/
CMD [ "node", "./server" ]