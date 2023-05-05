package com.bikeapp.server.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

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
	public List<Station> getAll(
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "50") int size){
		List<Station> stations = new ArrayList<>();
		Pageable paging = PageRequest.of(page, size);
		Page<Station> ps = repo.findAll(paging);
		stations = ps.getContent();
		return stations;
	}
	
	@GetMapping("/stations/{id}")
	public StationWithJourneys get(@PathVariable int id) {
		StationWithJourneys station = sjrepo.findById(id).orElse(null);
		if (station==null) throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Not found");
		return station;
	}

}
