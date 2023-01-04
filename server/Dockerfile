
# pull the Node.js Docker image
FROM node:alpine

# create the directory inside the container
WORKDIR /usr/src/app

# copy the package.json files from local machine to the workdir in container
COPY package.json .

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
COPY . .

# set process.env.NODE_ENV variable
ENV NODE_ENV=dev

# our app is running on port 5823 within the container, so need to expose it
EXPOSE 5823

# the command that starts our app
CMD ["npm", "run", "start"]