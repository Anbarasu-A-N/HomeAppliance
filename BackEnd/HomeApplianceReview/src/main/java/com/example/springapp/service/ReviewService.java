package com.example.springapp.service;

import com.example.springapp.entity.Review;
import com.example.springapp.repository.ReviewRepository;

import java.util.List;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    //@Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    // Service method to add a new review
    public Review addReview(Review review) {
        return reviewRepository.save(review);
    }

    
    public List<Review> getDetails() {
        return reviewRepository.findAll();
    }
}
