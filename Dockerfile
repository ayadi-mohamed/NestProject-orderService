FROM node:16.18.0-alpine
RUN npm install -g npm@8.19.2
RUN mkdir -p /var/www/application
WORKDIR /var/www/application
ADD . /var/www/application
RUN npm install
CMD npm run build && npm run start
