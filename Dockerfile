# Multistage Dockerfile for client

# Stage 1: Build React app
# Install node image
FROM node:10.16-alpine as react-app-build

# Create client directory
RUN mkdir -p /usr/app/client
WORKDIR /usr/app/client

# Install Dependencies
COPY ./client/package*.json ./
RUN npm ci

# Copy React files to client folder
COPY ./client .

# Build production ready React files
RUN npm run build

# Stage 2: Start Express
FROM node:10.16-alpine

# Create server directory
RUN mkdir -p /usr/app/server/build
WORKDIR /usr/app/server

# Copy React production files
COPY --from=react-app-build /usr/app/client/build/ ./build

# Install Dependencies
COPY ./server/package*.json ./
RUN npm ci

# Copy Express files to server folder
COPY ./server .

EXPOSE 5000

CMD ["npm","start"]