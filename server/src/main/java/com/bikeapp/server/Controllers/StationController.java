package com.bikeapp.server.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bikeapp.server.Entities.Station;
import com.bikeapp.server.Repositories.StationRepository;

@RestController
@RequestMapping("/api")
public class StationController {
	
	@Autowired
	StationRepository repo;
	
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

}
