
// working
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import './Profile.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Profile = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const userId = user ? user.uid : null;
      if (!userId) {
        alert('User ID not found. Please try again later.');
        return;
      }

      await axios.post(`http://127.0.0.1:8080/api/${userId}/uploadImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const updatedUser = { ...user, profileImagePath: selectedFile.name };
      setUser(updatedUser);

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to upload image. Please try again later.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('email');
    navigate('/login');
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-sidebar">
          <div className="profile-image">
            {user.profileImagePath ? (
              <img
                src={`http://localhost:8080/UserImage/${user.profileImagePath}`}
                style={{ width: '200px', height: '200px' }}
                alt="User"
              />
            ) : (
              <p>No profile image available</p>
            )}
            <input type="file" onChange={handleFileChange} />
            <button className="profile-button" id="profile-button" onClick={handleUpload}>Upload Photo</button>
          </div>
          <div className="profile-info">
            <h4>Full Name: {user ? user.firstName : ''}&nbsp;{user ? user.lastName : ''}</h4>
            <p>Age: {user ? user.age : ''}</p>
            <p>Gender: {user ? user.gender : ''}</p>
            <p>Email: {user ? user.email : ''}</p>
            <p>Phone: {user ? user.phone : ''}</p>
            <button className="profile-button" id="profile-button">Change Password</button>
            <button className="profile-button" id="profile-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div className="profile-content">
        <div className="profile-section">
        
        <h2>Settings</h2>
         
          </div>
          <div className="profile-section">
          <h2>
            <Link to="/review">Give Your Review</Link>
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

