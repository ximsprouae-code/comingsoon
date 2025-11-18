# Stage 1 — Build the React app
FROM node:18 AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2 — Serve the build with Nginx
FROM nginx:alpine

# Copy the build output to Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Replace default Nginx config (optional but recommended)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

