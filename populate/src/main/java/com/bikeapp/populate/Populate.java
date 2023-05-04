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
	private String file = "C:\\test.csv";
	@Autowired
	JourneyRepository repo;
	
	public void readFirstFile() throws IOException {
		try {
			BufferedReader scanner = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8"));
			String headers = scanner.readLine();
			
				Stream<String> lines = scanner.lines();
				lines.forEach(line -> {
					var parts = line.split(",");
					Journey j = new Journey();
					j.setDepartureTime(LocalDateTime.parse(parts[0]));
					j.setReturnTime(LocalDateTime.parse(parts[1]));
					j.setDepartureStationId(Integer.valueOf(parts[2]));
					j.setDepartureStation(parts[3]);
					j.setReturnStationId(Integer.valueOf(parts[4]));
					j.setReturnStation(parts[5]);
					j.setDistance(Integer.valueOf(parts[6]));
					j.setDuration(Integer.valueOf(parts[7]));
					repo.saveAndFlush(j);
				});
				
				scanner.close();
		} catch (FileNotFoundException e) {
			System.out.println("File not found");
			e.printStackTrace();
		}
		
		
		
	}

	public void init() throws IOException {
		readFirstFile();
		
	}
	
	
	
	

}
