package com.example.springapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.User;
import com.example.springapp.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        // Check if the email is already registered
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null) {
            throw new IllegalArgumentException("Email already registered");
        }

        // Save the user
        userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        // Find the user by email
        User existingUser = userRepository.findByEmail(email);
        if (existingUser == null || !existingUser.getPassword().equals(password)) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        return existingUser;
    }
    
    
    
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
    
    

    
    
}
