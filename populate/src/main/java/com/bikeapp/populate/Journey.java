package com.bikeapp.populate;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Journey {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private LocalDateTime departureTime;
	private LocalDateTime returnTime;
	private Integer departureStationId;
	private String departureStation;
	private Integer returnStationId;
	private String returnStation;
	private Double distance;
	private Integer duration;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public LocalDateTime getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(LocalDateTime departureTime) {
		this.departureTime = departureTime;
	}
	public LocalDateTime getReturnTime() {
		return returnTime;
	}
	public void setReturnTime(LocalDateTime returnTime) {
		this.returnTime = returnTime;
	}
	public Integer getDepartureStationId() {
		return departureStationId;
	}
	public void setDepartureStationId(Integer departureStationId) {
		this.departureStationId = departureStationId;
	}
	public String getDepartureStation() {
		return departureStation;
	}
	public void setDepartureStation(String departureStation) {
		this.departureStation = departureStation;
	}
	public Integer getReturnStationId() {
		return returnStationId;
	}
	public void setReturnStationId(Integer returnStationId) {
		this.returnStationId = returnStationId;
	}
	public String getReturnStation() {
		return returnStation;
	}
	public void setReturnStation(String returnStation) {
		this.returnStation = returnStation;
	}
	public Double getDistance() {
		return distance;
	}
	public void setDistance(Double distance) {
		this.distance = distance;
	}
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
	}
}
