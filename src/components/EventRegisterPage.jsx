
import { useParams } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';
// import './eventRegisterPage.css'

const EventRegisterPage = () => {
    const { eventId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    reg_no: '',
    department: '',
    section: '',
    // team: '',
    screenshot_id: null,
    event_id:{eventId},
    email:'',
    year:'',
    transaction_id:'',
    whatsapp:''
  });
  const [Image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    console.log(Image)
    try {
      const response = await axios.post('http://10.128.1.149:8000/events/payment_screenshot',{"screenshot": Image},
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response:', response.data);
      formData.screenshot_id = response.data.id
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
    try {
      const response = await axios.post('http://10.128.1.149:8000/events/register', formData);
      console.log('Response:', response.data);
      // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };

  return (
    <div>
        <div className="form-container">
      <h2 className="event-name">EVENT NAME</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>NAME</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>REGISTER NO</label>
          <input
            type="text"
            name="reg_no"
            value={formData.reg_no}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>DEPARTMENT</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>SECTION</label>
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>TEAM</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
            required
          />
        </div> */}
        <div className="form-group">
          <label>YEAR</label>
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Whatsapp</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p>GPAY QR</p>
          <div className="qr-div"><img className="qr-code"></img></div>
        </div>
        <div className="form-group">
          <label>TRANSACTION ID</label>
          <input
            type="text"
            name="transaction_id"
            value={formData.transaction_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>UPLOAD HERE</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        
        <div className="submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default EventRegisterPage;
