# CtfLinkifyTask

## Build Setup

``` bash
# install dependencies
$ yarn
# Or
$ npm install

# serve with hot reload at localhost:3000
$ yarn dev
# Or
$ npm run dev

# build for production and launch server
$ yarn build
$ yarn start
# Or
$ npm run build
$ npm run start

# generate static project
$ yarn generate
# Or
$ npm run generate
```

## Docker

``` bash
# For create image
docker build -t kolobok/ctflinkifytask:1.0 .

# For run container(port 8888 is your port)
docker run -p 8888:8080 kolobok/ctflinkifytask:1.0

# If runned on windows check ip
docker-machine ip
```
