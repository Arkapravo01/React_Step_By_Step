import React from 'react';

const User = ({ name='New User' }) => {
  return (
    <div>
      <h1>Hi, {name}</h1>
    </div>
  );
};

export default User;
