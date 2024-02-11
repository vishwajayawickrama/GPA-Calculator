import React, { useState, useEffect } from "react";
export const Subjects = () => {
  const [totalSum, setTotalSum] = useState(0);
  const [formsData, setFormsData] = useState([]); // Array to store all subjects
  const [formData, setFormData] = useState({
    modulecode: "",
    modulename: "",
    credits: "",
    grade: "",
  });

  const gradePoint = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    D: 1.0,
    I: 0.0,
  };

  const calculateGPA = () => {
    let totalCredits = 0;
    let totalgrade = 0;
    formsData.forEach((data) => {
      totalCredits += parseInt(data.credits);
      totalgrade += parseInt(data.credits) * gradePoint[data.grade]; // Assuming there's a 'value' property in each data object
    });
    setTotalSum((totalgrade.toFixed(2) / totalCredits.toFixed(2)).toFixed(2));
    console.log("Total GPA is :", totalSum);
  };

  useEffect(() => {
    calculateGPA();
    console.log(totalSum);
  }, [formsData]);

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
    setFormData({
      // Clearing out previous values from form object
      modulecode: "",
      modulename: "",
      credits: "",
      grade: formData.grade,
    });
    console.log("toal gpa is: ", totalSum);
  };

  const deleteRow = (indexToDelete) => {
    // You just cant delete item from array and expect rerender it in web page we have to use useState functionality to to new array without object on specified index and rerender it.
    setFormsData(formsData.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="flex flex-col items-center p-5 font-bold bg-red-300 m-5">
        <p>Add Details about Modules</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-green-500 m-4 p-3 flex justify-center"
      >
        <div className="flex flex-col items-center p-5">
          <input
            type="text"
            name="modulecode"
            placeholder="Module Code"
            value={formData.modulecode}
            onChange={handleInputChange}
            className="mt-1 mb-2 mr-3 ml-3  border border-black-600 rounded-md pl-2 pt-1 pb-1 focus:border-gray-500 focus:outline-gray-300"
          ></input>
        </div>
        <div className="flex flex-col items-center p-5">
          <input
            type="text"
            name="modulename"
            placeholder="Module Name"
            value={formData.modulename}
            onChange={handleInputChange}
            className="mt-1 mb-2 mr-3 ml-3  border border-black-600 rounded-md pl-2 pt-1 pb-1 focus:border-gray-500 focus:outline-gray-300"
          ></input>{" "}
        </div>
        <div className="flex flex-col items-center p-5">
          <input
            type="text"
            name="credits"
            value={formData.credits}
            placeholder="Credits Offered"
            onChange={handleInputChange}
            className="mt-1 mb-2 mr-3 ml-3  border border-black-600 rounded-md pl-2 pt-1 pb-1 focus:border-gray-500 focus:outline-gray-300"
          ></input>
        </div>
        <div className="flex flex-col items-center p-5">
          <select
            id="grade"
            name="grade"
            onChange={handleInputChange}
            className="mt-1 mb-2 mr-3 ml-3  border border-black-600 rounded-md pl-2 pr-2 pt-1 pb-1 focus:border-gray-500 focus:outline-gray-300"
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
        </div>
        <br />
        <div className="flex flex-col items-center p-5">
          <button
            type="submit"
            className="bg-yellow-300 pt-1 pb-1 pl-2 pr-2 m-1 border border-yellow-300 rounded-md font-bold"
          >
            + Add New Module
          </button>
        </div>
      </form>

      <table className="bg-purple-500 flex flex-col items-center p-5 m-5">
        <div>
          <thead>
            <tr>
              <th className="pl-4 pr-4">Module Code</th>
              <th className="pl-4 pr-4">Module Name</th>
              <th className="pl-4 pr-4">Credits Offered</th>
              <th className="pl-4 pr-4">Grade</th>
              <th className="pl-4 pr-4">Grade Point</th>
              <th className="pl-4 pr-4"></th>
            </tr>
          </thead>
          <tbody>
            {formsData.map((data, index) => (
              <tr key={index}>
                {/* TODO: Add delete row button to delete entire subject */}
                <td className="pl-4 pr-4 text-center">{data.modulecode}</td>
                <td className="pl-4 pr-4 text-center">{data.modulename}</td>
                <td className="pl-4 pr-4 text-center">{data.credits}</td>
                <td className="pl-4 pr-4 text-center">{data.grade}</td>
                <td className="pl-4 pr-4 text-center">
                  {gradePoint[formsData[index].grade]}
                </td>
                <td className="pl-4 pr-4 text-center">
                  {/* We just cant use deleterow function because it will trigger when rendered. The correct way to use event handler functions are wrapp it around arrow function. then it will only triggered when button or specific event happens rather than rendering. This is wrong way -> <button onClick={deleteRow(index)}></button> */}
                  <button
                    onClick={() => deleteRow(index)}
                    className="bg-red-600 ml-5 pl-2 pr-2 border border-red-600 rounded-lg text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" className="text-right">
                GPA -
              </td>
              <td colSpan="2" className="text-center">
                {totalSum}
              </td>
            </tr>
          </tfoot>
        </div>
      </table>
    </>
  );
};
