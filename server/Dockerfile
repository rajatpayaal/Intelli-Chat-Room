FROM node:16-alpine

# We use nodemon to restart the server every time there's a change
RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

# Use script specified in package,json
CMD ["npm", "run", "start"]