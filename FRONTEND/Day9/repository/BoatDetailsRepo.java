package com.example.boathouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.boathouse.model.BoatDetails;

@Repository
public interface BoatDetailsRepo extends JpaRepository <BoatDetails,Integer>{

}
