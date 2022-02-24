FROM node:latest

RUN apt-get update && apt-get upgrade -y

RUN mkdir -p /usr/src/app
RUN chown -R $user:$user /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/
RUN npm install
RUN npm install -g nodemon ts-node 

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

