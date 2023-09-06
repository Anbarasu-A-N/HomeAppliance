package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.example.springapp.entity.Products;

//@Repository
public interface ProductsRepository extends JpaRepository<Products, Integer> {

}

