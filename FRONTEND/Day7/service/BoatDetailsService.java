package com.example.boathouse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boathouse.model.BoatDetails;
import com.example.boathouse.repository.BoatDetailsRepo;

@Service
public class BoatDetailsService {
    @Autowired
    BoatDetailsRepo repo;
    public List<BoatDetails> getAllBoats() {
    
        return repo.findAll();
    }
    public Optional<BoatDetails> getById(int boatId) {
        // TODO Auto-generated method stub
        return repo.findById (boatId);
    }
    @SuppressWarnings("null")
    public String addBoat(BoatDetails boat) {
        // TODO Auto-generated method stub
        repo.save(boat);
        return "Boatadded";
    }

}
