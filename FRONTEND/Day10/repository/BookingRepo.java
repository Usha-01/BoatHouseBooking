package com.example.boathouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boathouse.model.BookingDetails;

public interface BookingRepo extends JpaRepository <BookingDetails,Integer>{

}
