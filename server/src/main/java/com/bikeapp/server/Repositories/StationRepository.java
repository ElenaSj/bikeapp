package com.bikeapp.server.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bikeapp.server.Entities.Station;

public interface StationRepository extends JpaRepository<Station, Integer> {

}
