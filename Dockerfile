FROM node:23-alpine

# Set working directory
WORKDIR /app

# Copy package files 
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the server will listen on
EXPOSE 4173

# Start the application
CMD [ "npm", "run", "preview" ]