# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app

# Install OS dependencies
RUN apk add --no-cache libc6-compat

# Copy only package files for caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci
COPY . .


ENV PORT=3000
EXPOSE 3000

RUN npm run build
RUN npm run start
