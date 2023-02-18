FROM node:lts-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/package.json

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]

