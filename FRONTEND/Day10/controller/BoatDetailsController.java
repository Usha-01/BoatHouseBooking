package com.example.boathouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.boathouse.model.BoatDetails;
import com.example.boathouse.service.BoatDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class BoatDetailsController {
        @Autowired
        BoatDetailsService service;

        @GetMapping("/boat")
        public List<BoatDetails> getAllBoats() {
            return service.getAllBoats();
        }

        @GetMapping("/boat/{boatId}")
        public Optional <BoatDetails> get(@PathVariable int boatId) {
            return service.getById(boatId);
        }
        
        @PostMapping("/addboat")
        public String addBoat(@RequestBody BoatDetails boat) {
            
            
            return service.addBoat(boat);
        }
        

}
