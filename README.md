# jamstack-react
React front-end for a JAMstack tutorial!

## Quick Start - Local
```
# Start MongoDB
$ mongod --dbpath /path/to/db/ 

# Install Dependencies and Start API
$ git clone https://github.com/nsuave/jamstack-api.git
$ cd jamstack-api
$ npm install
$ npm start

# Install Dependencies and Start Front-End
$ git clone https://github.com/nsuave/jamstack-react.git
$ cd jamstack-react
$ npm install
$ npm start
```

## Quick Start - Docker
```
# Start MongoDB Container
$ docker run --name jamstack-db -d -p 27017:27017 mongo:latest mongod --bind_ip_all

# Start Docker Image for API
$ docker run --name jamstack-api -d -p 8008:8008 --link jamstack-db:mongo nsuave/jamstack-api

# Start Docker Image for React
$ docker run --name jamstack-react -d -p 3000:3000 nsuave/jamstack-react
```

## Reference guides
https://scotch.io/tutorials/5-most-common-dropdown-use-cases-solved-with-react-downshift
https://codesandbox.io/s/1rj327v2jj

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).