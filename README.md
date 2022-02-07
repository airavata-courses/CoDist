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

## Installation Procedure

- API Gateway
  - Ensure latest version of Java is installed
 - Download latest version of Spring Boot
 - Install an IDE called IntelliJ IDEA
 - Clone the project files
 - Go to the pom.xml file in the root directory through the IntelliJ IDE.
 - Click on Maven which is to the extreme right and then click on build (the button is similar to a refresh button). This will load all the dependencies in your system.
 - Once the dependencies get installed, click on the green play button at the top. This will run the API Gateway microservice.
 - If you face issues, just ensure that the environment variables have been set correctly.


## Api-Gateaway.
Using Fast-API to develop the API Gateaway.

## Registry
Using Node.js and Mongodb to perform tasks such as login, session management, Oauth, authentication and log management

## Software Version (Parnal's)
Python - 3.7.9
Erlang - 24.2
RabbitMQ - 3.9.13
Spring Boot - 2.6.13
Java - 17
