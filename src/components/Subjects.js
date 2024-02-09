import React, { useState } from 'react';
export const Subjects = () => {

    const [formData, setFormData] = useState({
        modulecode: '',
        modulename: '',
        credits: '',
        grade: ''
      });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="modulecode" value="Module Code" onChange={handleInputChange}></input>
        <input type="text" name="modulename" value="Module Name" onChange={handleInputChange}></input>
        <input type="text" name="credits" value="Credits Offered" onChange={handleInputChange}></input>
        <select id="grade" name="grade" onChange={handleInputChange}>
            <option value="" disabled selected>Grade</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D">D</option>
            <option value="I">I</option>
        </select>
        <br/>
        <button type="submit">+ Add New Subject</button>
      </form>
    </>
  );
};
