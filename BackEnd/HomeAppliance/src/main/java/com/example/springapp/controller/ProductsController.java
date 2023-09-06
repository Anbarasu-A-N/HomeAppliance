package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.entity.Products;
import com.example.springapp.service.ProductsService;

@RestController
@CrossOrigin("http://localhost:3000/")
public class ProductsController {

    @Autowired
    ProductsService productsService;
    
    @PostMapping("/addProducts")
    public ResponseEntity<Object> addProduct(@RequestBody Products products) {
        ResponseEntity<Object> response = productsService.saveDetails(products);

        if (response.getStatusCode() == HttpStatus.OK) {
            String message = (String) response.getBody();
            if (message.equals("Product Request is Added Successfully")) {
                return new ResponseEntity<>("Product Request is Added Successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid Email", HttpStatus.OK);
            }
        } else {
            return new ResponseEntity<>(response.getBody(), response.getStatusCode());
        }
    }

    @GetMapping("/showProducts")
    public ResponseEntity<List<Products>> fetchDetails() {
        List<Products> products = productsService.getDetails();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/sort/{field}")
    public ResponseEntity<List<Products>> getWithSort(@PathVariable String field) {
        List<Products> sortedProducts = productsService.getSorted(field);
        return ResponseEntity.ok(sortedProducts);
    }

    @GetMapping("/page/{offset}/{pageSize}")
    public ResponseEntity<List<Products>> productsWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
        List<Products> paginatedProducts = productsService.getWithPagination(offset, pageSize);
        return ResponseEntity.ok(paginatedProducts);
    }
}
