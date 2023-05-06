package com.bikeapp.server.Repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bikeapp.server.Entities.Station;

public interface StationRepository extends JpaRepository<Station, Integer> {
	Page<Station> findByNameFiContainingOrNameSweContaining(String name, String namn, Pageable pageable);

}
