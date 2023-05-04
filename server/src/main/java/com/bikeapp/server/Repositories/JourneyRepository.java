package com.bikeapp.server.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bikeapp.server.Entities.Journey;

public interface JourneyRepository extends JpaRepository<Journey,Integer> {

}
