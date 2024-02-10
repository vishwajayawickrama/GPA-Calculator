import React, { useState } from "react";
export const Subjects = () => {
  const [formData, setFormData] = useState({
    modulecode: "Module Code",
    modulename: "",
    credits: "",
    grade: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-red-500 m-4 p-3 flex justify-center"
      >
        <input
          type="text"
          name="modulecode"
          value={formData.modulecode}
          onChange={handleInputChange}
          className="m-2"
        ></input>
        <input
          type="text"
          name="modulename"
          value="Module Name"
          onChange={handleInputChange}
          className="m-2"
        ></input>
        <input
          type="text"
          name="credits"
          value="Credits Offered"
          onChange={handleInputChange}
          className="m-2"
        ></input>
        <select id="grade" name="grade" onChange={handleInputChange} className="m-2">
          <option value="" disabled selected>
            Grade
          </option>
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
        <br />
        <button type="submit">+ Add New Subject</button>
      </form>
    </>
  );
};
