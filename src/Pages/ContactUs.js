import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [requestStatus, setRequestStatus] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const email = localStorage.getItem('email');
        if (!email) {
          return;
        }

        const response = await axios.get(`http://127.0.0.1:8080/api/profile`, {
          params: { email },
        });

        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(email);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessages('');
    setRequestStatus(null);
  };

  const handleRequest = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const data = {
        firstName,
        lastName,
        user: {
          email,
        },
        messages,
      };

      const response = await axios.post('http://127.0.0.1:8080/addUpdate', data);

      const message = response.data;
      setRequestStatus(message);

      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (error) {
      console.error('Error requesting product:', error);
      setRequestStatus('Error requesting product. Please try again later.');
      setTimeout(() => {
        resetForm();
      }, 5000);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }

    if (lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email Address is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <h1>Contact Us</h1>
      <center>
        <div className="container1">
          <h3>
            <label>First Name :&nbsp;&nbsp;{firstName}</label>
            <br/>

            <label>Last Name :&nbsp;&nbsp;{lastName}</label>
            <br/>

            <label>Email Address :&nbsp;&nbsp;{email}</label>
            <br/>

            <label htmlFor="subject">Subject :</label></h3>
          
            <form>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: '250px' }}
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
            ></textarea>

            <button type="button" id="contact" onClick={handleRequest}>
              Submit
            </button>

            {requestStatus && (
              <p className={requestStatus === 'Product Request is Added Successfully' ? 'success' : 'error'}>
                {requestStatus}
              </p>
            )}
          </form>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default ContactUs;



/*


// working
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './ContactUs.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [requestStatus, setRequestStatus] = useState(null);

  // Function to reset the form and status messages
  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessages('');
    setFormErrors({});
    setRequestStatus(null);
  };

  const handleRequest = async () => {
    // Perform form validation before making the request
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    try {
      const data = {
        firstName,
        lastName,
        user: {
          email,
        },
        messages,
      };

      const response = await axios.post('http://127.0.0.1:8080/addUpdate', data);

      // Assuming the backend responds with a message object
      const message = response.data;

      // Set the message to display
      setRequestStatus(message);

      // Reset the form and status messages after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);
    } catch (error) {
      console.error('Error requesting product:', error);

      // Set the message to display
      setRequestStatus('Error requesting product. Please try again later.');

      // Reset the form and status messages after 5 seconds
      setTimeout(() => {
        resetForm();
      }, 5000);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate each field and set the corresponding error message
    if (firstName.trim() === '') {
      errors.firstName = 'First Name is required';
    }

    if (lastName.trim() === '') {
      errors.lastName = 'Last Name is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email Address is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    setFormErrors(errors);

    // Return the errors object
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <h1>Contact Us</h1>
      <center>
        <div className="container1">
          <form>
            <label>First Name</label>
            <input
              type="text"
              className="text1"
              id="fname"
              name="firstname"
              placeholder="Your First Name.."
              required
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}

            <label>Last Name</label>
            <input
              type="text"
              className="text1"
              id="lname"
              name="lastname"
              placeholder="Your last Name.."
              required
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            {formErrors.lastName && <p className="error">{formErrors.lastName}</p>}

            <label>Email Address</label>
            <input
              type="email"
              className="text1"
              id="email"
              name="email"
              placeholder="Your Email Address.."
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: '200px' }}
              onChange={(e) => setMessages(e.target.value)}
              value={messages}
            ></textarea>

            <button type="button" id="contact" onClick={handleRequest}>
              Submit
            </button>

            {requestStatus && (
              <p className={requestStatus === 'Product Request is Added Successfully' ? 'success' : 'error'}>
                {requestStatus}
              </p>
            )}
          </form>
        </div>
      </center>
      <Footer />
    </>
  );
};

export default ContactUs;


/*

*/