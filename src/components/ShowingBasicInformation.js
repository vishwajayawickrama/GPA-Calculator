import React from 'react';
export const ShowingBasicINformation = (props) => {
    return (
        <>
            <div>
                <p>Name: {props.name}</p>
                <p>University: {props.university}</p>
                <p>Faculty: {props.faculty}</p>
                <p>Degree: {props.degree}</p>
            </div>
        </>
    );
}