# Stage 1: Build
FROM node:18-slim AS builder

# Set working directory
WORKDIR /app

# Copy package files and install all dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json* ./
COPY --from=builder /app/dist ./dist

# Install only production dependencies
RUN npm install --production

# Expose the application's port
EXPOSE 5000

# Define the command to run the application
CMD ["node", "dist/index.js"]
