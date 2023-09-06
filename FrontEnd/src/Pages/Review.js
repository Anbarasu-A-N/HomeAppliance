import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Review.css'; // Assuming you have a Review.css file for styling
import Navbar from './Navbar';
import Footer from './Footer';
import StarRatingComponent from 'react-star-rating-component';

const Review = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState('');
  const [reviewScore, setReviewScore] = useState(0);
  const [reset, setReset] = useState(false); // Added state for reset
  const navigate = useNavigate();

  const fetchProfile = useCallback(async () => {
    try {
      const email = localStorage.getItem('email');
      if (!email) {
        navigate('/login');
        return;
      }

      const response = await axios.get(`http://127.0.0.1:8080/api/profile`, {
        params: { email },
      });
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    // Assuming you have an endpoint to submit the review to the server
    try {
      const response = await axios.post('http://127.0.0.1:8081/reviews/add', {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        review: review,
        reviewScore: reviewScore,
      });

      // Assuming you handle the response from the server appropriately, e.g., show a success message
      console.log('Review submitted successfully:', response.data);

      // Reset review and reviewScore after 5 seconds
      setReset(true);
      setTimeout(() => {
        setReview('');
        setReviewScore(0);
        setReset(false);
      }, 5000);
    } catch (error) {
      // Handle any error that may occur during review submission
      console.error('Failed to submit review:', error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="review-container">
        <h2>Leave a Review</h2>
        <form onSubmit={handleSubmitReview}>
          <label>Review:</label>
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <div className="star-rating">
            <label>Review Score:</label>
            <h1>
              <StarRatingComponent
                name="reviewScore"
                id="reviewscore"
                starCount={10}
                value={reviewScore}
                onStarClick={(value) => setReviewScore(value)}
              />
            </h1>
          </div>
          <div className="autofilled-info">
            <h4>First Name: &nbsp;&nbsp;&nbsp;{user ? user.firstName : ''}</h4>
            <h4>Last Name: &nbsp;&nbsp;&nbsp;&nbsp;{user ? user.lastName : ''}</h4>
            <h4>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {user ? user.email : ''}</h4>
          </div>
          <button type="submit" className={reset ? 'reset-button' : ''}>
            {reset ? 'Review Submitted!' : 'Submit Review'}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Review;
