package com.example.boathouse.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.boathouse.model.Users;

public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByEmail(String email);
}
