package com.bikeapp.populate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;

@Component
public class Populate {
	@Value("${spring.datasource.url}")
    String url;
    @Value("${spring.datasource.username}")
    String user;
    @Value("${spring.datasource.password}")
    String psw;

	@Autowired
	JourneyRepository repo;
	
	public Connection getConnection(){
        try{
            Connection con=DriverManager.getConnection(url,user,psw);
            System.out.println("Connected to database");
            return con;
        }
        catch(SQLException ex){
            ex.printStackTrace();
        }
        return null;
    }
	
	private static void dropCreate(Connection con,String table,String create){
        try{
            Statement stm=con.createStatement();
            stm.execute("DROP TABLE "+table);
            stm.close();
        }
        catch(SQLException ex){
            System.out.println("Not dropped: "+table);
        }
        try{
            Statement stm=con.createStatement();
            stm.execute("CREATE TABLE "+table+create);
            stm.close();
        }
        catch(SQLException ex){
            System.out.println("Not created: "+table);
        }
    }
	
	public void readJourneyFile(String file) throws IOException {
		try {
			System.out.println("Starting to read data from "+file);
			BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8"));
			String headers = reader.readLine();
			reader.lines().forEach(line -> saveJourney(line));
			System.out.println("Finished reading data from "+file);
			close(reader);
		} catch (FileNotFoundException e) {
			System.out.println("File not found");
			e.printStackTrace();
		}
	}
	
	public void saveJourney(String journeyLine) {
		var parts = journeyLine.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);
		double distance = 0;
		int duration = 0;
		int departureStationId = 0;
		int returnStationId = 0;
		LocalDateTime departureTime = null;
		LocalDateTime returnTime = null;
		String departureStation = sanitize(parts[3]);
		String returnStation = sanitize(parts[5]);

		try {
			distance = Double.valueOf(parts[6]);
			duration = Integer.valueOf(parts[7]);
			departureStationId = Integer.valueOf(parts[2]);
			returnStationId = Integer.valueOf(parts[4]);

		} catch (NumberFormatException ex) {
			System.out.println("Skipped line "+journeyLine+": failed to parse integer");
			System.out.println(ex.getMessage());
			return;
		}
		
		if (distance < 10 || duration < 10) return;
		
		try {
			departureTime = LocalDateTime.parse(parts[0]);
			returnTime = LocalDateTime.parse(parts[1]);
		}catch (DateTimeParseException ex){
			System.out.println("Skipped line "+journeyLine+": failed to parse date/time");
			System.out.println(ex.getMessage());
			return;
		}
		
		
		Journey j = new Journey();
		j.setDepartureTime(departureTime);
		j.setReturnTime(returnTime);
		j.setDepartureStationId(departureStationId);
		j.setDepartureStation(departureStation);
		j.setReturnStationId(returnStationId);
		j.setReturnStation(returnStation);
		j.setDistance(distance);
		j.setDuration(duration);
		repo.saveAndFlush(j);
	}
	
	public String sanitize (String station) {
		if (station.charAt(0)== '\"' && station.charAt(station.length() - 1) == '\"') {
			station = station.substring(1, station.length() - 1);
		}
		return station;
	}
	
	public void close(BufferedReader reader) {
		try {
			reader.close();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
	}

	public void init() throws IOException {
		Connection con=getConnection();
        if (con==null){
            System.out.println("Could not connect to database");
            return;
        }
        dropCreate(con, "journey", "(id int PRIMARY KEY NOT NULL AUTO_INCREMENT, "
        		+ "departure_time varchar(32), "
        		+ "return_time varchar(32), "
        		+ "departure_station_id int, "
        		+ "departure_station varchar(40), "
        		+ "return_station_id int, "
        		+ "return_station varchar(40), "
        		+ "distance int, "
        		+ "duration int)");   		
        try{
            con.close();
        }
        catch(SQLException ex){
            ex.printStackTrace();
        }
    
		readJourneyFile("C:\\2021-05.csv");
		System.out.println("Ready to roll! All data fetched");
		
	}
	
	
	
	

}
