# get the official nodeJs image from DockerHub
FROM node:10
# Set working directory to /usr/src/app this is default directory for nodejs
# docker images
WORKDIR /usr/src/app

#copy the code to working directory
COPY . .

# specify the run command, it is specified in the package.json file under
# scripts tag
CMD ["npm","run","start"]
