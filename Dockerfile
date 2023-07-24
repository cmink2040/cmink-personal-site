# Step 1: Build the Vite.js app
FROM node:14 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire Vite.js app to the container
COPY . .

# Build the production version of the Vite.js app
RUN yarn build

# Step 2: Serve the built Vite.js app with a lightweight server
FROM nginx:alpine

# Copy the built Vite.js app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the default HTTP port for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
