import React, { useState } from 'react';
import axios from 'axios';
import "./AdminContactUs.css";
import AdminNavbar from './AdminNavbar';

const AdminContactUs = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [includeAttachment, setIncludeAttachment] = useState(false);
    const [attachment, setAttachment] = useState(null);
    const [loading, setLoading] = useState(false);
    const [messageText, setMessageText] = useState('');
  
    const handleRecipientChange = (e) => {
      setRecipient(e.target.value);
    };
  
    const handleSubjectChange = (e) => {
      setSubject(e.target.value);
    };
  
    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };
  
    const handleIncludeAttachmentChange = () => {
      setIncludeAttachment(!includeAttachment);
      // Reset the attachment when toggling the "OR" option off
      if (!includeAttachment) {
        setAttachment(null);
      }
    };
  
    const handleAttachmentChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setAttachment(file);
      } else {
        setAttachment(null);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('recipient', recipient);
      formData.append('subject', subject);
      formData.append('msgBody', message);
  
      if (includeAttachment && attachment) {
        formData.append('attachment', attachment);
      }
  
      setLoading(true);
      axios.post('http://127.0.0.1:8080/sendMailWithAttachment', formData)
        .then((response) => {
          console.log(response.data);
          setMessageText('Email sent successfully!');
          // Reset form fields
          setRecipient('');
          setSubject('');
          setMessage('');
          setIncludeAttachment(false);
          setAttachment(null);
        })
        .catch((error) => {
          console.error(error);
          setMessageText('Error while sending email.');
        })
        .finally(() => {
          setLoading(false);
          // Clear the message after a few seconds
          setTimeout(() => {
            setMessageText('');
          }, 5000);
        });
    };
  
    return (
        <>
        <AdminNavbar></AdminNavbar>
        <br />
      <div className="email-form">
        <h2>Send Gmail To Customer</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">Recipient:</label>
            <input
              type="email"
              id="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              required
            />
          </div>
  
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
          </div>
  
          <div className="form-group">
            <label htmlFor="includeAttachment">Include Attachment:</label>
            <input
              type="checkbox"
              id="includeAttachment"
              checked={includeAttachment}
              onChange={handleIncludeAttachmentChange}
            />
          </div>
  
          {includeAttachment && (
            <div className="form-group">
              <label htmlFor="attachment">Attachment (optional):</label>
              <input
                type="file"
                id="attachment"
                onChange={handleAttachmentChange}
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              />
            </div>
          )}
  
          <button type="submit" id="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Gmail'}
          </button>
          {messageText && <p className="message">{messageText}</p>}
        </form>
      </div>
      </>
    );
  };

export default AdminContactUs;
