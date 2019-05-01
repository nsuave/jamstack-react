FROM node:16.8.6

# Set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add to node_modules to PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --silent

# Start app
CMD ["npm", "start"]