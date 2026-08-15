import { useState } from 'react';

const UserAdd = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const createUser = async () => {
    console.log(name, age, email);
    const url = 'http://localhost:3000/users';
    let response = await fetch(url, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, age }),
    });
    response = await response.json();
    if (response) {
      alert('New user added!');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Add New User</h1>
      <input
        onChange={(event) => setName(event.target.value)}
        type='text'
        placeholder='Enter Name'
      />
      <br />
      <br />
      <input
        onChange={(event) => setAge(event.target.value)}
        type='text'
        placeholder='Enter Age'
      />
      <br />
      <br />
      <input
        onChange={(event) => setEmail(event.target.value)}
        type='text'
        placeholder='Enter Email'
      />
      <br />
      <br />
      <button onClick={createUser}>Add User</button>
    </div>
  );
};

export default UserAdd;
