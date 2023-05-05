package com.bikeapp.server.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bikeapp.server.Entities.StationWithJourneys;

public interface StationWithJourneysRepository extends JpaRepository<StationWithJourneys, Integer> {

}
