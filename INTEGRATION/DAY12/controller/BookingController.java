package com.example.boathouse.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.boathouse.model.BookingDetails;
import com.example.boathouse.service.BookingService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/book")

public class BookingController {
    @Autowired
    BookingService service;

    @PostMapping("/addbooking")
    public String bookBoat(@RequestBody BookingDetails book) {  
        return service.bookBoat(book);
    }

    @GetMapping("/getbooking")
    public List <BookingDetails> getAll() {
        return service.getAllBookings();
    }
    
    @GetMapping("/getbooking/{userId}")
    public Optional <BookingDetails> getBookiByUserId(@PathVariable int userId) {
        return service.getBookingByUserId(userId);
    }
    
    @DeleteMapping("/delete/{bookingId}")
        public String deleteBooking(@PathVariable int bookingId)
        {
            return service.deleteBooking(bookingId);
        }
}
