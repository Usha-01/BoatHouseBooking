package com.example.boathouse.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boathouse.model.BookingDetails;
import com.example.boathouse.repository.BookingRepo;

@Service
public class BookingService {

    @Autowired
    BookingRepo repo;

    public List<BookingDetails> getAllBookings() {
        return repo.findAll();
    }

    @SuppressWarnings("null")
    public String bookBoat(BookingDetails bookingDetails) {
        
            repo.save(bookingDetails);
            return "Boat Booked successfully!";
        
    }

    public Optional<BookingDetails> getBookingByUserId(int userId) {
        return repo.findById(userId);
    }

    public String deleteBooking(int bookingId) {
        if (repo.existsById(bookingId)) {
          
                repo.deleteById(bookingId);
                return "Booking deleted successfully";
            } 
        else {
            return "Booking not found";
        }
    }
}
