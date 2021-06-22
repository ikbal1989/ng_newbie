# we choose the lts version
FROM node:14.17.1
LABEL maintainer="ikbalhossain.com"
# set working directory
WORKDIR /app
# copy and install app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest
# add app
COPY . /app
EXPOSE 4203
# start app
CMD ["ng",  "serve", "--host", "0.0.0.0", "--port", "4203"]