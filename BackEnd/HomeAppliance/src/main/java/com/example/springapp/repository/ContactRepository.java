package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.entity.Contact;
//import org.springframework.stereotype.Repository;


//@Repository
public interface ContactRepository extends JpaRepository<Contact, Integer> {

}

