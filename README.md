# bikeapp

Bikeapp is running on: 
MYADDRESS
Feel free to visit! You can also run the app locally on your machine, check for instructions below.

Bikeapp consists of three parts: 
-Populate: to read data from csv files and import it to database
-Bikeapp Server: back-end REST api
-Bikeapp Client: front-end

Instructions to run the app locally:
NB! The app is tested to run on Windows. I won't bet my money on it running on other OS.

Prerequisites
-Java runtime environment that can run Java-17
-MySQL database

Steps to run the app
1. Before you launch the app for the first time
-Store your bike journey and station data files in the root of C://, have them named XXXXXXXX
-Create a database in MySQL that you want to use for the app.
-Create a user with password authentication for the database and grant all privileges for the user.
-Navigate to bikeapp/... and modify the application.properties file to match your database config:
  kdosakdoap
  oiejfiosejfsie
  osiejfoisejf
  sijoisjfosifj
-Navigate to bikeapp/.... and add a similar application.properties file there as well
2. Run the Bikeapp Populate app to fetch the data 
NB! This will take some time, please bear with me.
-On Command Prompt, cd to bikeapp/........ and run the following command:
      mvnw spring-boot:run
-Wait patiently
-When you see the message "Ready to roll! All data fetched" you're good to go
-Terminate the process on Command Prompt
3. Run the Actual BikeApp TM
-On Command Prompt, cd to bikeapp/............ and run the following command:
      mvnw spring-boot:run
-Navigate with your browser to localhost:8081
-Enjoy the experience
      

Technologies:
-MySQL database
-SpringBoot
-React

Features:
-Importing journey and bike station data from csv files to database
-REST api endpoints to fetch journey and bike station data from database
