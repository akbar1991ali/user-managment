FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy both frontend and backend code
COPY ./client/package*.json ./client/
COPY ./server/package*.json ./server/

# Install dependencies for both frontend and backend
RUN cd ./client && npm install
RUN cd ./server && npm install

# Copy the rest of the code
COPY . .

# Build the frontend
RUN cd ./client && npm run build

# Expose ports for frontend and backend
EXPOSE 3000
EXPOSE 3010

# Start both frontend and backend
CMD ["sh", "-c", "npx ts-node server/src/server.ts & npm start --prefix ./client"]
