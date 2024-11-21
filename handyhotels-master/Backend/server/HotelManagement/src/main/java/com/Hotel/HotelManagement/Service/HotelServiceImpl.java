package com.Hotel.HotelManagement.Service;

//import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
//import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.Hotel.HotelManagement.Dao.HotelDao;
import com.Hotel.HotelManagement.Entity.Hotel;
import com.Hotel.HotelManagement.Exceptions.ResourceNotFoundException;
import com.Hotel.HotelManagement.payloads.HotelDto;

@Service
public class HotelServiceImpl implements HotelService {
	//List<Hotel> list;
	@Autowired
	private HotelDao hoteldao;
	
	public HotelServiceImpl(){
//		list = new ArrayList<>();
//		list.add (new Hotel("Casa Rasidency",101,"Bhubaneswar", "998877665"));
//		list.add(new Hotel("Neatflix and Chill",102,"Bhubaneswar","999999999"));
//		
	}

	@Override
	public List<Hotel> getHotelDetails() {
		// TODO Auto-generated method stub
		return hoteldao.findAll();
	}

	@Override
	public Optional<Hotel> getHotel(long hotel_id) {
		// TODO Auto-generated method stub
//		Hotel c = null;
//		for(Hotel id:list) {
//			if(id.getHotel_id()==hotel_id)
//			{
//				c=id;
//				break;
//			}
//		}
	return hoteldao.findById(hotel_id);
	}

	@Override
	public Hotel addHotel(Hotel hotel) {
		// TODO Auto-generated method stub
//		list.add(hotel);
		hoteldao.save(hotel);
	return hotel;
	}

	@Override
	public HotelDto updateHotel(HotelDto hoteldto, Long hotel_id) {
		
		Hotel h = this.hoteldao.findById(hotel_id) .orElseThrow(()-> new ResourceNotFoundException("Hotel", "Id", hotel_id));
		
		h.setHotelname(hoteldto.getHotelname());
		h.setLocation(hoteldto.getLocation());
		h.setPhonenumber(hoteldto.getPhonenumber());
		
		Hotel updatedHotel = this.hoteldao.save(h);
		
		HotelDto hotelDto1 = this.hotelToDto(updatedHotel);
		
		return hotelDto1;
		
		

	}

	@Override
		public void deleteHotel(long hotel_id) {
		
		Hotel hotel = this.hoteldao.findById(hotel_id)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", hotel_id));
		
		this.hoteldao.delete(hotel);
		
	}
	
	private Hotel dtoToHotel(HotelDto hoteldto) {
		Hotel hotel=new Hotel();
		hotel.setHotel_id(hoteldto.getHotel_id());
		hotel.setHotelname(hoteldto.getHotelname());
		hotel.setLocation(hoteldto.getLocation());
		hotel.setPhonenumber(hoteldto.getPhonenumber());
		return hotel;
		
		
	}
	private HotelDto hotelToDto(Hotel hotel) {
		HotelDto hoteldto=new HotelDto();
		hoteldto.setHotel_id(hotel.getHotel_id());
		hoteldto.setHotelname(hotel.getHotelname());
		hoteldto.setLocation(hotel.getLocation());
		hoteldto.setPhonenumber(hotel.getPhonenumber());
		return hoteldto;

	

}
}