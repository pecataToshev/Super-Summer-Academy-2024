# Use the official Node.js image as a base
FROM node:18

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set the environment variable to increase memory limit
ENV NODE_OPTIONS=--max_old_space_size=4096

# Build the Angular application based on the provided environment
ARG ANGULAR_ENV=production
RUN npm run build -- --configuration=$ANGULAR_ENV

# Expose the port the app runs on
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
