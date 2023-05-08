package com.bikeapp.server.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bikeapp.server.Entities.Station;
import com.bikeapp.server.Entities.StationWithJourneys;
import com.bikeapp.server.Repositories.StationRepository;
import com.bikeapp.server.Repositories.StationWithJourneysRepository;

@RestController
@RequestMapping("/api")
public class StationController {
	
	@Autowired
	StationRepository repo;
	@Autowired
	StationWithJourneysRepository sjrepo;
	
	@GetMapping("/stations")
	public ResponseEntity<Map<String, Object>> getAll(
			@RequestParam(required = false) String filter,
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "50") int size){
		
		try {
			Pageable paging = PageRequest.of(page, size);
			Page<Station> ps;
		
			if (filter==null || filter.isEmpty()) {
				ps = repo.findAll(paging);
			} else {
				ps = repo.findByNameFiContainingOrNameSweContainingOrAddressFiContainingOrAddressSweContaining(filter, filter, filter, filter, paging);
			}
			
			Map<String, Object> response = new HashMap<>();
			
			response.put("stations", ps.getContent());
			response.put("totalPages", ps.getTotalPages());
		
			return new ResponseEntity<>(response, HttpStatus.OK);
		
		} catch (Exception ex) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/stations/{id}")
	public ResponseEntity<?> get(@PathVariable int id) {
		StationWithJourneys station = sjrepo.findById(id).orElse(null);
		if (station==null) return ResponseEntity.notFound().build();
		return ResponseEntity.ok(station);
	}
}
