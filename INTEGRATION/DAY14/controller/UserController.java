package com.example.boathouse.controller;
import org.springframework.web.bind.annotation.RestController;
import com.example.boathouse.model.Users;
import com.example.boathouse.service.UserService;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RequiredArgsConstructor
@RestController

public class UserController {

    @Autowired
    UserService service;
    @GetMapping("/user")
    public List<Users> getAllUser() { 
        return service.getAllUser();
    }

    
    @GetMapping("/get/{id}") // Corrected path variable name
    public Optional<Users> get(@PathVariable Long id) {
        return service.getById(id);
    }
    
    
    @DeleteMapping ("/delete/{userId}")
    public String deleteUser(@PathVariable Long id)
    {
        {
            return service.deleteUser(id);
        }
    }

}
