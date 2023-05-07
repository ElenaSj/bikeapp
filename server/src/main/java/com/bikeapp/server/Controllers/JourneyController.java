package com.bikeapp.server.Controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bikeapp.server.Repositories.JourneyRepository;
import com.bikeapp.server.Entities.Journey;

@RestController
@RequestMapping("/api")
public class JourneyController {
	
	@Autowired
	JourneyRepository repo;
	
	@GetMapping("/journeys")
	public ResponseEntity<Map<String, Object>> getAll(
			@RequestParam(required = false) String station,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "50") int size){
		try {
			Pageable paging = PageRequest.of(page, size);
			Page<Journey> pj;
		
			if (station==null || station.isEmpty()) {
				pj=repo.findAll(paging);
			} else {
				pj=repo.findByDepartureStationContainingOrReturnStationContaining(station, station, paging);
			} 
	
			Map<String, Object> response = new HashMap<>();
		
			response.put("journeys", pj.getContent());
			response.put("totalPages", pj.getTotalPages());
		
			return new ResponseEntity<>(response, HttpStatus.OK);
		
		} catch (Exception ex) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
		
		
		
		
	}

}
