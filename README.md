# CoDist
Spring 2022 Project

Parnal Ghundare Patil

Tanu Kansal

Chinmay Kunte

Aditya Arun Rudrawar

## Project Overview

This project provides an interface to plot historical data provided by NEXRAD AWS based on the user’s input (date, time and radar fields). It makes use of  a microservice based architecture to allocate separate functionality to each microservice. As a group with 4 members we have used 4 programming languages and two databases to build this system. The provided functionalities include user registration, logging history, editable inputs and the plotting image.

## Tech Stack

- Front-End: ReactJS
- API gateway – Java Spring Boot
- Registry – NodeJS, Database: MongoDB
- Data Ingestion and Plotting - Python
- Logging and History service – GoLang, Database: PostgreSQL

## Docker Installation Procedure (Run with Docker)

- Write over here


## Napkin Diagram

![Napkin Diagram](https://user-images.githubusercontent.com/38610661/152897261-44908232-0849-464a-ac9d-f4aa207c7a59.jpeg)
    
## Microservice Architecture

![Microservice architecture](https://user-images.githubusercontent.com/94020074/152900398-5d0eb6cc-749c-4f34-96a6-afc7e8f2896c.png)


Please refer Wiki Page for detailed information related to all our project phases

https://github.com/airavata-courses/CoDist/wiki/Project-Phase-I

## Microservices Installation Procedure (Not needed if Docker installation procedure is done)

- [Frontend - ReactJS](https://github.com/airavata-courses/CoDist/tree/basic_ui)
- [API Gateway - Java Spring Boot](https://github.com/airavata-courses/CoDist/tree/dev-api-gateway)
- [Plotting Microservice - Python Flask](https://github.com/airavata-courses/CoDist/tree/dev-plotting)
- [History Microservice - Golang](https://github.com/airavata-courses/CoDist/tree/dev-history-service)
- [Registry Microservice - NodeJS](https://github.com/airavata-courses/CoDist/tree/dev-registry)

