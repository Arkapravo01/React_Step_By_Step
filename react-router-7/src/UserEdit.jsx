import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const UserEdit = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/users/` + id;

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setName(response.name);
    setEmail(response.email);
    setAge(response.age);
  };

  const updateUserData = async () => {
    let response = await fetch(url, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    console.log(response);
    if (response) {
      alert('User data updated successfully!');
      navigate('/');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Edit User Details</h1>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type='text'
        placeholder='User Name'
      />
      <br />
      <br />
      <input
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        type='text'
        placeholder='User Email'
      />
      <br />
      <br />
      <input
        onChange={(event) => setAge(event.target.value)}
        value={age}
        type='text'
        placeholder='User Age'
      />
      <br />
      <br />
      <button onClick={updateUserData}>Update User</button>
    </div>
  );
};

export default UserEdit;
