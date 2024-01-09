# Use the official Node.js image with a specific version as the base
FROM node:14

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy configuration files and source code
COPY package*.json tsconfig.json ./
COPY src ./src

# Install dependencies
RUN npm install

# Compile TypeScript code
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the application when the container starts
CMD ["npm", "start"]
