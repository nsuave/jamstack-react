FROM node:10.15.3-alpine

# Set working directory
RUN mkdir /jamstack-react
WORKDIR /jamstack-react
COPY . /jamstack-react

# Add to node_modules to PATH
ENV PATH /jamstack-react/node_modules/.bin:$PATH

# Install dependencies
RUN npm install --silent

EXPOSE 3000

# Start app
CMD ["npm", "start"]