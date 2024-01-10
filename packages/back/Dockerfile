# Use the official Node.js image with a specific version as the base
FROM node:18

# Set the working directory to /usr/src/app
WORKDIR /usr/src/app

# Copy configuration files and source code
COPY package*.json tsconfig.json ./
COPY src ./src

# Install dependencies
RUN yarn install

# Compile TypeScript code
RUN yarn build

# Expose port 3000
EXPOSE 3001

# Run the application when the container starts
CMD ["yarn", "start"]
