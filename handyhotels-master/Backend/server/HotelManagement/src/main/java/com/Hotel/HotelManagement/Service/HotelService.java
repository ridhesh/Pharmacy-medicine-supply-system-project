package com.Hotel.HotelManagement.Service;

import java.util.List;
import java.util.Optional;

import com.Hotel.HotelManagement.Entity.Hotel;
import com.Hotel.HotelManagement.payloads.HotelDto;

public interface HotelService {
	
	public List<Hotel> getHotelDetails();

	public Optional<Hotel> getHotel(long hotel_id);
	
	public Hotel addHotel(Hotel hotel);
	
	public HotelDto updateHotel(HotelDto hoteldto , Long hotel_id);
	
	public void deleteHotel(long hotel_id );


}
