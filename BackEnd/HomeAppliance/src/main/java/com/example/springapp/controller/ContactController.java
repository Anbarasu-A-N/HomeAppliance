package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.entity.Contact;
import com.example.springapp.service.ContactService;


@RestController
@CrossOrigin("http://localhost:3000/")
public class ContactController {

    @Autowired
    ContactService contactService;
    
    @PostMapping("/addUpdate")
    public ResponseEntity<Object> addUpdate(@RequestBody Contact contact) {
        ResponseEntity<Object> response = contactService.saveDetails(contact);

        if (response.getStatusCode() == HttpStatus.OK) {
            String message = (String) response.getBody();
            if (message.equals("Update is Sent Successfully")) {
                return new ResponseEntity<>("Update is Sent Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid Email", HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<>(response.getBody(), response.getStatusCode());
        }
    }

    @GetMapping("/showUpdates")
    public ResponseEntity<List<Contact>> fetchDetails() {
        List<Contact> products = contactService.getDetails();
        return ResponseEntity.ok(products);
    }

}
