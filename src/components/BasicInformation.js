import React, { useState } from 'react';
import { ShowingBasicINformation } from './ShowingBasicInformation';

function BasicInformation() {
  // Define state variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    faculty: '',
    degree: ''
  });

  const [submitted, setSubmitted] = useState(false); // State to track form submission

  // Define a function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Define a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., submit it to a server
    console.log('Form submitted with data:', formData);
    setSubmitted(true); // Update submission state to true
  };

  return (
    <>
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="university">University: </label>
            <input 
              type="text" 
              id="university" 
              name="university" 
              value={formData.university} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="faculty">faculty: </label>
            <input 
              type="text" 
              id="faculty" 
              name="faculty" 
              value={formData.faculty} 
              onChange={handleInputChange} 
            />
          </div>
          <div>
            <label htmlFor="degree">Degree: </label>
            <input 
              type="text" 
              id="degree" 
              name="degree" 
              value={formData.degree} 
              onChange={handleInputChange} 
            />
          </div>
          <button type="submit">Submit</button>
        </form> )}
      
      {submitted && <ShowingBasicINformation name={formData.name} university={formData.university} faculty={formData.faculty} degree={formData.degree} />}

      
    </>
    

  );
}

export default BasicInformation;
