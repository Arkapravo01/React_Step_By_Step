import React from 'react';

const College = ({ names }) => {
  return (
    <div>
      {names.map((college) => (
        <h1>{college}</h1>
      ))}
    </div>
  );
};

export default College;
