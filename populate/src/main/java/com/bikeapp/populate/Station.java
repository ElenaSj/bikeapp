package com.bikeapp.populate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bikestation")
public class Station {
	@Id
	private Integer id;
	private Integer stationId;
	private String nameFi;
	private String nameSwe;
	private String nameEng;
	private String addressFi;
	private String addressSwe;
	private String cityFi;
	private String citySwe;
	private String operator;
	private Integer capacity;
	private String longitude;
	private String latitude;
	
	public Station() {
		
	}
	
	public Station(Integer id, Integer stationId, String nameFi,
			String nameSwe, String nameEng, String addressFi,
			String addressSwe, String cityFi, String citySwe, 
			String operator, Integer capacity,
			String longitude, String latitude) {
		this.id=id;
		this.stationId=stationId;
		this.nameFi=nameFi;
		this.nameSwe=nameSwe;
		this.nameEng=nameEng;
		this.addressFi=addressFi;
		this.addressSwe=addressSwe;
		this.cityFi=cityFi;
		this.citySwe=citySwe;
		this.operator=operator;
		this.capacity=capacity;
		this.longitude=longitude;
		this.latitude=latitude;
	}
	
	public String getCityFi() {
		return cityFi;
	}

	public void setCityFi(String cityFi) {
		this.cityFi = cityFi;
	}

	public String getCitySwe() {
		return citySwe;
	}

	public void setCitySwe(String citySwe) {
		this.citySwe = citySwe;
	}

	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getStationId() {
		return stationId;
	}
	public void setStationId(Integer stationId) {
		this.stationId = stationId;
	}
	public String getNameFi() {
		return nameFi;
	}
	public void setNameFi(String nameFi) {
		this.nameFi = nameFi;
	}
	public String getNameSwe() {
		return nameSwe;
	}
	public void setNameSwe(String nameSwe) {
		this.nameSwe = nameSwe;
	}
	public String getNameEng() {
		return nameEng;
	}
	public void setNameEng(String nameEng) {
		this.nameEng = nameEng;
	}
	public String getAddressFi() {
		return addressFi;
	}
	public void setAddressFi(String addressFi) {
		this.addressFi = addressFi;
	}
	public String getAddressSwe() {
		return addressSwe;
	}
	public void setAddressSwe(String addressSwe) {
		this.addressSwe = addressSwe;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public Integer getCapacity() {
		return capacity;
	}
	public void setCapacity(Integer capacity) {
		this.capacity = capacity;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	
	
	
	
	
	
}
