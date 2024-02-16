import React, { useState } from 'react';
import { ShowingBasicINformation } from './ShowingBasicInformation';
import { Subjects } from './Subjects';

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
    const { name, value } = event.target;//Comment
    setFormData({
      ...formData,
      [name]: value
    });
  };
//rtt
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
        <form onSubmit={handleSubmit} className="bg-blue-300">
          <div className='flex'>
            <div className='flex flex-col'>
              
              <label htmlFor="name" className='m-2 bg-red-600'>Name: </label>
              <label htmlFor="university" className='m-2 bg-green-600'>University: </label>
              <label htmlFor="faculty" className='m-2'>faculty: </label>
              <label htmlFor="degree" className='m-2'> Degree: </label>
            </div>
            <div>
              <div className='m-3'>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className='m-3'>
                
                <input 
                  type="text" 
                  id="university" 
                  name="university" 
                  value={formData.university} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className='m-3'>
                
                <input 
                  type="text" 
                  id="faculty" 
                  name="faculty" 
                  value={formData.faculty} 
                  onChange={handleInputChange} 
                />
              </div>
              <div className='m-4'>
                <input 
                  type="text" 
                  id="degree" 
                  name="degree" 
                  value={formData.degree} 
                  onChange={handleInputChange} 
                />
              </div>
              </div>
              </div>
          <button type="submit" className=''>Submit</button>
        </form> )}
      
      {submitted && <ShowingBasicINformation name={formData.name} university={formData.university} faculty={formData.faculty} degree={formData.degree} />}

        <Subjects />
    </>
    

  );
}

export default BasicInformation;
