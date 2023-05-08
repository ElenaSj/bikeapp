# bikeapp

Bikeapp is running on [Render](www.myaddress.com)

Feel free to visit! **Disclaimer:** Bikeapp on Render doesn't contain all of the data due to database size restrictions. Database connection might be slow and unstable at times. If you want to see all of the data, you can run the app locally on your machine. Check for instructions below.

## General

Bikeapp consists of three parts: 

- Populate: An app to read data from csv files and import it to database (Spring-Boot app)
- Bikeapp Server: Back-end (Spring-Boot Web server)
- Bikeapp Client: Front-end (React app)

## Instructions to run the app locally

**Disclaimer:** The app is tested to run on Windows and these instructions are meant for Windows. I won't bet my money on it running on other OS.

### Prerequisites

- Java Runtime Environment that can run Java-17
- MySQL

### Steps to run

1. Have a MySQL database ready
**Option 1:**
- On MySQL create a database that you want to use for the app.
- Create a user with password authentication for the database and grant all privileges for the user.
**Option 2:**
- Use a database and user that you already have.

2. Get the data to your database
**Option 1, import MySQL dump to your database**
- [Download bikeapp.sql.zip](https://drive.google.com/file/d/1vcsyir1gukQSPs7qvlf0K2hyHMJ-4jB1/view?usp=sharing)
- Unpack and import to your database
**Option 2, use the Bikeapp Populate** NB! Importing large files takes some time, please bear with me.
- Have your bike journey and station data files stored somewhere on your machine.
- Navigate to **bikeapp/populate/src/main/resources** and modify the **application.properties** file to match your database config.
- On Command Prompt, cd to bikeapp/populate and run the following command: `mvnw spring-boot:run`
- The app will query if you want to create database tables for journeys and bikestations. Answer yes if you don't have them already.
- The app will query what kind of data you want to import. Answer "station" for bike stations and "journey" for bike journeys.
- The app will query the path to your data file.
- When you have imported all the data you want to use, you're good to go.

3. Run the Actual BikeApp TM
- Navigate to **bikeapp/server/src/main/resources** and modify the **application.properties** file to match your database config.
- On Command Prompt, cd to bikeapp/server and run the following command: `mvnw spring-boot:run`
- Navigate with your browser to localhost:8081
- Enjoy the experience
      
## Technologies used
* **MySQL database:** I decided to go with a relation database because there is some relational nature to the data. I also saw a possibility that if the app were to be developed further, the data might get more complex eg. with users, more info on the service providers, links to public transport... However, the data structure at the moment is not very complex so a document database would have been fine too. My other option was to go with a MongoDB database and an Express.js server with mongoose for back-end. 
* **SpringBoot web app:** I decided to develop the backend with SpringBoot because the JPA repository has nice functionality for pagination & sorting.
* **React app:** Just plain React, no Redux this time because the app is quite small and I didn't see a need for more complex state handling.
    * Bootstrap: To make the UI easier on the eye I decided to go with the Bootstrap library (instead for eg. MUI) because the UI is quite simple.
    * Leaflet & leaflet-react: I used Leaflet for the station maps, because it's lightweight with sufficient functionality for this use case
* **Docker:** to deploy the app to Render
* **Db4free.net and Render:** For demonstrative purposes I deployed the app to Render with a database on db4free.net. I used these service providers because they are free of charge and no risk for surprise costs. For actual production deployment neither of these options would be viable and I'd suggest a reliable cloud service. Eg. if we were to use AWS one option would be to have AWS RDS for database, S3 Bucket static website hosting for front-end and AWS Elastic Beanstalk / EC2 for back-end.

## Features
* Importing journey and bike station data from csv files to database with data validation
* REST api endpoint to fetch journey data from database, with pagination, filtering and sorting
* REST api endpoint to fetch bike station data from database, with pagination and filtering 
* REST api endpoint to fetch data for a single bike station with the number of journeys
* Web UI to view journey and station lists
* Web UI to view info (adress, number of journeys, location on a map) for a single station
* Web UI to search for and sort journeys
* Web UI to search for stations

## Further developmet
* Automated tests
* Possibility to store new journeys and stations
* The UI could be prettier
* Automated fetching of new data
* Front end could still be refactored into smaller components
* Functionality to filter journeys based on date
