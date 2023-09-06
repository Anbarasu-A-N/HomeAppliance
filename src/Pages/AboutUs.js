import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
import First from "./Images/First.jpg";
import Second from "./Images/Second.jpg";
import Third from "./Images/Third.jpg";

const AboutUs = () => {
  
  const handleContactClick = (email) => {
    const mailtoLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(mailtoLink, "_blank");
  };
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="about-section">
          <h1>About Us</h1>
          <p>Welcome to Allsmart Appliances, your trusted partner for all your home appliance needs.</p>
          <p> We are dedicated to providing high-quality appliances that make your life easier and more enjoyable.</p>
          
        </div>

        <h2 style={{ textAlign: 'center' }}>Our Team</h2>
        <div className="row">
          <div className="column">
            <div className="card">
              <img src={First} alt="First"  style={{ width: '100%' }} />
              <div className="container">
                <h2>Angel A</h2>
                <p className="title">Manager</p>
                <p>Manage the Allsmart Home Appliance service website</p>
                <p>manage@gmail.com</p>
                <p>
                  <button className="button" onClick={() => handleContactClick("mr.emperoroflove@gmail.com")}>
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img src={Second} alt="Second"  style={{ width: '100%' }} />
              <div className="container">
                <h2>Mr Anbarasu AN</h2>
                <p className="title">Admin</p>
                <p>Manage the Website , Technicians and Customer</p>
                <p>admin@gmail.com</p>
                <p>
                  <button className="button" onClick={() => handleContactClick("mr.emperoroflove@gmail.com")}>
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src={Third} alt="Third" style={{ width: '100%' }} />
              <div className="container">
                <h2>Mrs Anbarasu</h2>
                <p className="title">Manager</p>
                <p>Manage the Allsmart Home Appliance service website</p>
                <p>manager@gmail.com</p>
                <p>
                  <button className="button" onClick={() => handleContactClick("mr.emperoroflove@gmail.com")}>
                    Contact
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

