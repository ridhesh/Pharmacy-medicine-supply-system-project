package com.Hotel.HotelManagement.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Hotel.HotelManagement.Entity.Hotel;

public interface HotelDao extends JpaRepository<Hotel, Long> {

}
