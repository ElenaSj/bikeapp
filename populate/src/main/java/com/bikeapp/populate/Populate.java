package com.bikeapp.populate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDateTime;
import java.util.stream.Stream;

@Component
public class Populate {

	@Autowired
	JourneyRepository repo;
	
	public void readJourneyFile(String file) throws IOException {
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8"));
			String headers = reader.readLine();
			reader.lines().forEach(line -> saveJourney(line));
			close(reader);
		} catch (FileNotFoundException e) {
			System.out.println("File not found");
			e.printStackTrace();
		}
	}
	
	public void saveJourney(String journeyLine) {
		var parts = journeyLine.split(",");
		int distance = 0;
		int duration = 0;
		
		try {
			distance = Integer.valueOf(parts[6]);
			duration = Integer.valueOf(parts[7]);
		}catch (NumberFormatException ex){
			System.out.println(ex.getMessage());
		}
		
		if (distance < 10 || duration < 10) return;
		
		Journey j = new Journey();
		j.setDepartureTime(LocalDateTime.parse(parts[0]));
		j.setReturnTime(LocalDateTime.parse(parts[1]));
		j.setDepartureStationId(Integer.valueOf(parts[2]));
		j.setDepartureStation(parts[3]);
		j.setReturnStationId(Integer.valueOf(parts[4]));
		j.setReturnStation(parts[5]);
		j.setDistance(distance);
		j.setDuration(duration);
		repo.saveAndFlush(j);
	}
	
	public void close(BufferedReader reader) {
		try {
			reader.close();
		} catch (Exception e){
			System.out.println(e.getMessage());
		}
	}

	public void init() throws IOException {
		readJourneyFile("C:\\2021-05.csv");
		
	}
	
	
	
	

}
