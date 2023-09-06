package com.example.springapp.service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.springapp.entity.Contact;
import com.example.springapp.entity.User;
import com.example.springapp.repository.ContactRepository;
import com.example.springapp.repository.UserRepository;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<Object> saveDetails(Contact contact) {
        String userEmail = contact.getUser().getEmail();
        System.out.println("User Email: " + userEmail);
        
        // Check if the associated user already exists in the database
        User existingUser = userRepository.findByEmail(userEmail);
        System.out.println("User: " + existingUser);

        if (existingUser == null) {
            // If the user does not exist, return "Invalid email"
            System.out.println("Email Id Not Found");
            return new ResponseEntity<Object>("Invalid email", HttpStatus.OK);
        } else {
            // Associate the saved user with the products entity
        	contact.setUser(existingUser);
            System.out.println("Product Update Service is Sent");
            contactRepository.save(contact);
            return new ResponseEntity<Object>("Update is Sent Successfully", HttpStatus.OK);
        }
    }

    public List<Contact> getDetails() {
        return contactRepository.findAll();
    }

    
}
