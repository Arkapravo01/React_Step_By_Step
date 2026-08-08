import React from 'react';
import Student from './Student';

const College = ({ college }) => {
  return (
    <div
      style={{
        backgroundColor: '#ccc',
        padding: '20px',
        borderBottom: '2px solid black',
        margin: '20px',
        borderRadius: '10px',
      }}
    >
      <h1>Name: {college.name}</h1>
      <ul>
        <li>
          <h3>{college.city}</h3>
        </li>
        <li>
          <h3>{college.website}</h3>
        </li>
        <li>
          <Student student={college.student} />
        </li>
      </ul>
    </div>
  );
};

export default College;
