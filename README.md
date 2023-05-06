
# Running FastAPI in Docker

In this project, we will provide a brief demonstration of how to build a simple API using FastAPI, a modern Python web framework, along with MongoDB, a popular NoSQL database, and Docker, a virtualization platform that makes it easy to create and manage containers.

With FastAPI, you can quickly and efficiently create APIs, leveraging Python's static typing and asynchronous features to the fullest. MongoDB is a popular choice for storing data in modern applications, offering flexibility and scalability. And Docker allows you to package the application into a container, which can be easily deployed in different environments, making API deployment simpler and more portable.

In this tutorial, we will cover basic steps, from setting up the environment with Docker, creating a FastAPI project, configuring MongoDB as the database, and implementing CRUD (Create, Read, Update, Delete) API routes using FastAPI. We will explore how FastAPI simplifies the process of creating APIs with features such as data input validation, automatic generation of interactive documentation, and more.

If you are interested in building APIs quickly using modern technologies such as FastAPI, MongoDB, and Docker, this tutorial is a great starting point!


### Pulling Docker images


Reference: https://hub.docker.com/_/python

```bash
  docker pull python
```
Reference: https://hub.docker.com/_/mongo

```bash
  docker pull mongo
```
Reference: https://hub.docker.com/_/mongo-express

```bash
  docker pull mongo-express
```
    
### Running docker-compose
```bash
  cd FastAPI-in-Docker
  docker compose up
```
## Containers
![alt text](https://github.com/viniciusmalagi/FastAPI-in-Docker/blob/main/images/containers_cars.png?raw=true)

## MongoExpress
![alt text](https://github.com/viniciusmalagi/FastAPI-in-Docker/blob/main/images/mongoexpress.png?raw=true)

## API - all cars
![alt text](https://github.com/viniciusmalagi/FastAPI-in-Docker/blob/main/images/api_cars.png?raw=true)

## API - specific car
![alt text](https://github.com/viniciusmalagi/FastAPI-in-Docker/blob/main/images/specific_car.png?raw=true)


### Stopping Docker
```bash
  docker compose down
```
