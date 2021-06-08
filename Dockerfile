FROM registry.access.redhat.com/ubi7/nodejs-14
WORKDIR /app
COPY package*.json .
RUN npm install

EXPOSE 3001

COPY server server
CMD ["npm", "start"]