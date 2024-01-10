# Use the official Node.js image with a specific version as the base
FROM node:18 as builder
 
# Set the working directory
WORKDIR /app
 
# Copy configuration files and install dependencies
COPY packages/frontend/ ./
RUN yarn install
RUN yarn build 
 
# Copy project files
COPY packages/frontend/dist/ ./dist
 
# Stage 2: Serve the application using NGINX
FROM nginx:alpine
 
# Copy the built React app from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
 
# Expose the default NGINX port
EXPOSE 80
 
# The default command starts NGINX
CMD ["nginx", "-g", "daemon off;"]