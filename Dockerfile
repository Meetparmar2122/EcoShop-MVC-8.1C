FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app (node_modules excluded by .dockerignore)
COPY . .

# Set environment variable
ENV NODE_ENV=production

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
