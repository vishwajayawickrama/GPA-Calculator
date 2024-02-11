import React, { useState } from "react";
export const Subjects = () => {
  const [formsData, setFormsData] = useState([]);   // Array to store all subjects
  const [formData, setFormData] = useState({
    modulecode: "Module Code",
    modulename: "Module Name",
    credits: "Credits Offered",
    grade: "",
  });

  const handleInputChange = (event) => {
    // When input changes take previos values from object and add new data to it
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default submitting form
    console.log("Form submitted with data:", formData);
    setFormsData([...formsData, formData]); //Adding new object to array
    setFormData({     // Clearing out previous values from form object
      modulecode: "Module Code",
      modulename: "Module Name",
      credits: "Credits Offered",
      grade: formData.grade,
    });
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
          value={formData.modulename}
          onChange={handleInputChange}
          className="m-2"
        ></input>
        <input
          type="text"
          name="credits"
          value={formData.credits}
          onChange={handleInputChange}
          className="m-2"
        ></input>
        <select
          id="grade"
          name="grade"
          onChange={handleInputChange}
          className="m-2"
        >
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

      <table>
        <thead>
          <tr>
            <th>Module Code</th>
            <th>Module Name</th>
            <th>Credits Offered</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {formsData.map((data, index) => (
            <tr key={index}>             
              {/* TODO: Add delete row button to delete entire subject */}
              <td>{data.modulecode}</td>
              <td>{data.modulename}</td>
              <td>{data.credits}</td>
              <td>{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
