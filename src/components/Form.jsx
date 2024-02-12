import React from "react";
import './form.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import eventPhoto from '../img/event1.jpg'

function Form(){
  const { eventName } = useParams();
  

    
  const [formData, setFormData] = useState({
    name: '',
    reg_no: '',
    department: '',
    section: '',
    // team: '',
    screenshot_id: null,
    event_id:{eventName},
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
    return(
        <>
        <div className="form-body">
        <div className="image-body"><img src={eventPhoto} alt="" /></div>
        <div className="form-container">
          
      <h2 className="event-name">EVENT NAME</h2>
      <div className="formInside-body">
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label className="placeholder">
    NAME
  </label> 
          
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="reg_no"
            value={formData.reg_no}
            onChange={handleChange}
            required
          />
          <label className="placeholder">REGISTER NO</label>
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
          <label className="placeholder">DEPARTMENT</label>
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="section"
            value={formData.section}
            onChange={handleChange}
            required
          />
          <label className="placeholder">SECTION</label>
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
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          />
          <label className="placeholder">YEAR</label>
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
          <label className="placeholder">Whatsapp</label> 
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="placeholder">EMAIL</label>
        </div>
        <div>
          <p>GPAY QR</p>
          <div className="qr-div"><img className="qr-code"></img></div>
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="transaction_id"
            value={formData.transaction_id}
            onChange={handleChange}
            required
          />
          <label className="placeholder">TRANSACTION ID</label>
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
    </div>
        </>
    );
}
export default Form;