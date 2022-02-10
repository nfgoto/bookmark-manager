## BUILD STAGE ##

# problems when installing sqlite3 with alpine (missing/incompatible deps)
FROM node:lts AS build
WORKDIR /app/

# fetcch dependencies
COPY ./package*.json ./
RUN npm ci

# copy source code
COPY ./ ./

# transpile typescript to vanilla javascript
RUN npm run build

## RUN STAGE ##

FROM node:lts

WORKDIR /app/

ENV NODE_ENV=production
ENV OEMBED_PROVIDERS_URL="https://oembed.com/providers.json"

COPY --from=build /app/dist/ /app/package*.json ./
RUN npm ci --production

# change ownership from root (default) to node user (security best practice)
RUN chown -R node:node /app/

CMD [ "node", "." ]
