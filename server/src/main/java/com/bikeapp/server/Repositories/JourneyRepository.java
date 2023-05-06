package com.bikeapp.server.Repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bikeapp.server.Entities.Journey;

public interface JourneyRepository extends JpaRepository<Journey,Integer> {
	Page<Journey> findByDepartureStationContainingOrReturnStationContaining(String dstation, String rstation, Pageable pageable);


}
