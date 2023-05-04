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

import com.bikeapp.server.Repositories.JourneyRepository;
import com.bikeapp.server.Entities.Journey;

@RestController
@RequestMapping("/api")
public class JourneyController {
	
	@Autowired
	JourneyRepository repo;
	
	@GetMapping("/journeys")
	public List<Journey> getAll(
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "50") int size){
		List<Journey> journeys = new ArrayList<>();
		Pageable paging = PageRequest.of(page, size);
		Page<Journey> pj = repo.findAll(paging);
		journeys = pj.getContent();
		return journeys;
	}

}
