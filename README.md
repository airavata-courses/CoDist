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

## Prerequisites
- Make sure no other application running on ports: 8000, 8080, 5000, 3333, 27017, 5432, 1776

- Start application in browser using: http://localhost:1776


## Docker Installation Procedure (Run with Docker)

- Install Docker and Docker-compose

# Pull docker images from account: tanukansaldocker123 ( Multiple images created for multiple processor configurations )
- docker pull tanukansaldocker123/codist-gateway:arm64 || docker pull tanukansaldocker123/codist-gateway:amd64
- docker pull tanukansaldocker123/codist-registry:arm64 || docker pull tanukansaldocker123/codist-registry:amd64
- docker pull tanukansaldocker123/codist-plotting:arm64 || docker pull tanukansaldocker123/codist-plotting:amd64
- docker pull tanukansaldocker123/codist-history:arm64 || docker pull tanukansaldocker123/codist-history:amd64
- docker pull tanukansaldocker123/codist-postgres:arm64 || docker pull tanukansaldocker123/codist-postgres:amd64
- docker pull tanukansaldocker123/codist-frontend:arm64 || docker pull tanukansaldocker123/codist-frontend:amd64
- docker pull mongo:5.0.5-focal

- Create local folders for Mongo and Postgres volumes, and add to .yml file accordinly.

# Run yml file
- docker-compose  -f stackMac.yml up -d || docker-compose  -f stackWindows.yml up -d




## Napkin Diagram

![Napkin Diagram](https://user-images.githubusercontent.com/38610661/152897261-44908232-0849-464a-ac9d-f4aa207c7a59.jpeg)
    
## Microservice Architecture
![Architecture diagram](https://user-images.githubusercontent.com/94020074/152905274-07d2c0ec-68c2-4f04-aeb0-9334e4f00934.png)


Please refer Wiki Page for detailed information related to all our project phases

https://github.com/airavata-courses/CoDist/wiki/Project-Phase-I

## Microservices Installation Procedure (Not needed if Docker installation procedure is done)

- [Frontend - ReactJS](https://github.com/airavata-courses/CoDist/tree/basic_ui)
- [API Gateway - Java Spring Boot](https://github.com/airavata-courses/CoDist/tree/dev-api-gateway)
- [Plotting Microservice - Python Flask](https://github.com/airavata-courses/CoDist/tree/dev-plotting)
- [History Microservice - Golang](https://github.com/airavata-courses/CoDist/tree/dev-history-service)
- [Registry Microservice - NodeJS](https://github.com/airavata-courses/CoDist/tree/dev-registry)

