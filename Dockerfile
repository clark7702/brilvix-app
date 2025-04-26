# Use Node 18 LTS
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Install ONLY production dependencies
RUN npm install --production

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Expose port (change if needed)
EXPOSE 5000

# Start the app
CMD ["node", "dist/index.js"]
