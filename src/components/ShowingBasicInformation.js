import React from "react";
export const ShowingBasicINformation = (props) => {
  return (
    <>
      <div className="flex flex-col items-center bg-teal-500 m-5 p-4">
        <p>Name: {props.name}</p>
        <p>University: {props.university}</p>
        <p>Faculty: {props.faculty}</p>
        <p>Degree: {props.degree}</p>
      </div>
    </>
  );
};
