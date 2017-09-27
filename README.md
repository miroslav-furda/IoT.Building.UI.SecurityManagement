# IotUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Docker start application
  
`docker build -t darwin-ui-access-managment .`


docker build on Docker file

##Docker select all container and docker images

`docker ps -a`

##show all docker images

`docker images`

#show all containers

`docker container ls`

#start iot-ui application

`docker run -it -p 4200:4200 --name darwin-ui-access-managment -d darwin-ui-access-managment`


##

`docker exec -it darwin-ui-access-managment /bin/bash`

`npm rebuild node-sass`

`exit`


##

`docker ps -a`

##

`docker restart HASH_CODE_CONTAINER_ID`

##start docker-compose for docker container

`docker-compose up -d`

# GO -->

localhost:4200/


#stop docker application

`docker stop HASH_CODE_CONTAINER_ID`


#docker removed container_id


`docker rm CONTAINER_ID -f`

#docker removed image_id

`docker rmi IMAGE_ID -f`

`docker exec -ti HASH_CONTAINER_ID bash`
