FROM node:18-alpine as base

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
FROM base as dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build
FROM dependencies as build
COPY . .
RUN pnpm run build

# Run
FROM busybox:1.35 as run
WORKDIR /app
COPY --from=build /app/dist .
CMD ["busybox", "httpd", "-f", "-v", "-p", "8080"]
