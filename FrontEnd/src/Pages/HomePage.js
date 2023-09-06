import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

const HomePage = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productModel, setProductModel] = useState('');
  const [productModelId, setProductModelId] = useState('');
  const [productYear, setProductYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [requestStatus, setRequestStatus] = useState(null);

  const years = Array.from(
    { length: new Date().getFullYear() - 1949 },
    (_, index) => new Date().getFullYear() - index
  );

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const resetForm = () => {
    setProductId('');
    setProductName('');
    setProductModel('');
    setProductModelId('');
    setProductYear(new Date().getFullYear());
    setFormErrors({});
    setRequestStatus(null);
  };

  const handleRequest = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const data = {
        productId,
        productName,
        productModel,
        productModelId,
        productYear,
        user: {
          email,
        },
      };

      const response = await axios.post('http://127.0.0.1:8080/addProducts', data);

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

    if (productId.trim() === '') {
      errors.productId = 'Product ID is required';
    }

    if (productName.trim() === '') {
      errors.productName = 'Product Name is required';
    }

    if (productModel.trim() === '') {
      errors.productModel = 'Product Model is required';
    }

    if (productModelId.trim() === '') {
      errors.productModelId = 'Product Model ID is required';
    }

    if (productYear === '') {
      errors.productYear = 'Product Year is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <div className="container2">
        <h1>Request Product Service</h1>
        <label htmlFor="productId" id="product">
          Product ID:
        </label>
        <input
          type="number"
          id="productId"
          style={{ width: "100%"}}
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        {formErrors.productId && <p className="error">{formErrors.productId}</p>}

        

        <label htmlFor="productName" id="product">
          Product Name:
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {formErrors.productName && <p className="error">{formErrors.productName}</p>}

        <label htmlFor="productModel" id="product">
          Product Model:
        </label>
        <input
          type="text"
          id="productModel"
          value={productModel}
          onChange={(e) => setProductModel(e.target.value)}
        />
        {formErrors.productModel && <p className="error">{formErrors.productModel}</p>}

        <label htmlFor="productModelId" id="product">
          Product Model ID:
        </label>
        <input
          type="text"
          id="productModelId"
          value={productModelId}
          onChange={(e) => setProductModelId(e.target.value)}
        />
        {formErrors.productModelId && <p className="error">{formErrors.productModelId}</p>}

        <label htmlFor="productYear" id="product">
          Product Year:
        </label>
        <select id="productYear" value={productYear} onChange={(e) => setProductYear(e.target.value)}>
          <option value="">-- Select Year --</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {formErrors.productYear && <p className="error">{formErrors.productYear}</p>}

        <label htmlFor="email" id="product">
          Your Email ID:
        </label>
        <h4>{email}</h4>

        <button id="request" onClick={handleRequest}>
          Request
        </button>

        {requestStatus && (
          <p className={requestStatus === 'Product Request is Added Successfully' ? 'success' : 'error'}>
            {requestStatus}
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;



/*




import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

const HomePage = () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productModel, setProductModel] = useState('');
  const [productModelId, setProductModelId] = useState('');
  const [productYear, setProductYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [requestStatus, setRequestStatus] = useState(null); // null: initial state, string: message to display

  const years = Array.from(
    { length: new Date().getFullYear() - 1949 },
    (_, index) => new Date().getFullYear() - index
  );

  // Function to reset the form and status messages
  const resetForm = () => {
    setProductId('');
    setProductName('');
    setProductModel('');
    setProductModelId('');
    setProductYear(new Date().getFullYear());
    setEmail('');
    setFormErrors({});
    setRequestStatus(null);
  };

  const handleRequest = async () => {
    // Perform form validation before making the request
    if (!validateForm()) {
      return;
    }

    try {
      const data = {
        productId,
        productName,
        productModel,
        productModelId,
        productYear,
        user: {
          email,
        },
      };

      const response = await axios.post('http://127.0.0.1:8080/addProducts', data);

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
    if (productId.trim() === '') {
      errors.productId = 'Product ID is required';
    }

    if (productName.trim() === '') {
      errors.productName = 'Product Name is required';
    }

    if (productModel.trim() === '') {
      errors.productModel = 'Product Model is required';
    }

    if (productModelId.trim() === '') {
      errors.productModelId = 'Product Model ID is required';
    }

    if (productYear === '') {
      errors.productYear = 'Product Year is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Navbar />
      <div className="container2">
        <h1>Request Product Service</h1>
        <label htmlFor="productId" id="product">
          Product ID:
        </label>
        <input
          type="number"
          id="productId"
          style={{ width: "100%"}}
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        {formErrors.productId && <p className="error">{formErrors.productId}</p>}

        <label htmlFor="productName" id="product">
          Product Name:
        </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {formErrors.productName && <p className="error">{formErrors.productName}</p>}

        <label htmlFor="productModel" id="product">
          Product Model:
        </label>
        <input
          type="text"
          id="productModel"
          value={productModel}
          onChange={(e) => setProductModel(e.target.value)}
        />
        {formErrors.productModel && <p className="error">{formErrors.productModel}</p>}

        <label htmlFor="productModelId" id="product">
          Product Model ID:
        </label>
        <input
          type="text"
          id="productModelId"
          value={productModelId}
          onChange={(e) => setProductModelId(e.target.value)}
        />
        {formErrors.productModelId && <p className="error">{formErrors.productModelId}</p>}

        <label htmlFor="productYear" id="product">
          Product Year:
        </label>
        <select id="productYear" value={productYear} onChange={(e) => setProductYear(e.target.value)}>
          <option value="">-- Select Year --</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {formErrors.productYear && <p className="error">{formErrors.productYear}</p>}

        <label htmlFor="email" id="product">
          Your Email ID:
        </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {formErrors.email && <p className="error">{formErrors.email}</p>}

        <button id="request" onClick={handleRequest}>
          Request
        </button>

        {requestStatus && (
          <p className={requestStatus === 'Product Request is Added Successfully' ? 'success' : 'error'}>
            {requestStatus}
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

/*

*/