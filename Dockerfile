# Step 1: Build of react project
FROM node:14 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm install -g serve
RUN npm run build
# RUN serve -s build


# Step 2: Build of react project

FROM nginx AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]


