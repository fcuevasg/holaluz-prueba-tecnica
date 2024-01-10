# Use the official Node.js image with a specific version as the base
FROM node:18
 
# Set the working directory to /usr/src/app
WORKDIR /app
 
# Copy configuration files and source code
COPY packages/backend/package.json packages/backend/tsconfig.json ./
COPY packages/backend/src ./src
 
# Install dependencies
RUN yarn install
 
# Compile TypeScript code
RUN yarn build
 
# Expose port 3567
EXPOSE 3567
 
# Run the application when the container starts
CMD ["node", "/app/dist/app.js"]
