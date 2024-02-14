package com.example.boathouse.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="BoatDetails")
public class BoatDetails {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        int boatId;
        String boatName;
        int rooms;
        String location;
        String food;
        String foodType;
        String acRoom;
        String price;
        String fromTime;
        String toTime;
        String image;
}
