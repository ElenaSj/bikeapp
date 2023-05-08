package com.bikeapp.server.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
			@RequestParam(defaultValue = "50") int size,
			@RequestParam(defaultValue = "dstation") String sort){
		
		Pageable paging = PageRequest.of(page, size);
		try {
			if (sort.equals("dstation")) paging = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC,"departureStation"));
			if (sort.equals("rstation")) paging = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC,"returnStation"));
			if (sort.equals("longestd")) paging = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC,"distance"));
			if (sort.equals("shortestd")) paging = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC,"distance"));
			if (sort.equals("longestt")) paging = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC,"duration"));
			if (sort.equals("shortestt")) paging = PageRequest.of(page, size, Sort.by(Sort.Direction.ASC,"duration"));
			
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
