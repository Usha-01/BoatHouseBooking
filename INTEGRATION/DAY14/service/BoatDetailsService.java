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
     
        return repo.findById (boatId);
    }
    @SuppressWarnings("null")
    public String addBoat(BoatDetails boat) {
       
        repo.save(boat);
        return "Boatadded";
    }
    public String deleteBoat(int boatId) {

        if (repo.existsById(boatId)) {
          
            repo.deleteById(boatId);
            return "Boat deleted successfully";
        } 
    else {
        return "Boat is not found";
    }
       
    }
    public String updateBoat(int boatId, BoatDetails boat) {
        Optional<BoatDetails> optionalBoat = repo.findById(boatId);
        
        if (optionalBoat.isPresent()) {
            BoatDetails existingBoat = optionalBoat.get();
            existingBoat.setBoatName(boat.getBoatName());
            existingBoat.setFoodType(boat.getFoodType());
            existingBoat.setPrice(boat.getPrice());
            existingBoat.setFromTime(boat.getFromTime());
            existingBoat.setToTime(boat.getToTime());
            
            repo.save(existingBoat);
            return "Boat updated successfully";
        } else {
            return "Boat not found";
        }
    }
}
