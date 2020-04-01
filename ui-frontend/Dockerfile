# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./ui-frontend/package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.4.0 -g
COPY ./ui-frontend/ /app
RUN npm run build

## Add the wait script to the image
ADD util/wait /wait
RUN chmod +x /wait

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]