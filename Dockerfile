# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and .npmrc to the working directory
COPY package.json ./
COPY .npmrc ./

# Install dependencies
RUN npm install

# Install 'serve' globally
RUN npm install -g serve

# Copy all other source files
COPY . .

# Build the application
RUN npm run build

# Remove node_modules to reduce image size
RUN rm -rf node_modules

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build files from the first stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]