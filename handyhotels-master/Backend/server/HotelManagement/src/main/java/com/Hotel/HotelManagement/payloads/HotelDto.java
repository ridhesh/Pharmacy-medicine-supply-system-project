package com.Hotel.HotelManagement.payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class HotelDto {
	
	private long hotel_id;
	private String hotelname;
	private String location;
	private String phonenumber;
	public long getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(long hotel_id) {
		this.hotel_id = hotel_id;
	}
	public String getHotelname() {
		return hotelname;
	}
	public void setHotelname(String hotelname) {
		this.hotelname = hotelname;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	
	}


