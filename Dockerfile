# # # Dockerfile (tag: v3)
# # FROM node:10
FROM node:8.4.0

RUN npm install webpack -g

WORKDIR /webCode/
COPY package.json .
RUN npm config set registry http://registry.npmjs.org/ && npm install

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /webCode/node_modules /usr/src/app/
RUN webpack

CMD npm run serve  
EXPOSE 8080