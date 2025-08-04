# Build phase
FROM node:22-alpine as builder
WORKDIR /app
COPY package*json .
RUN npm install
COPY . .
RUN npm run build

# Run phase
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html