import { useEffect, useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router';

const UserList = () => {
  const url = 'http://localhost:3000/users';

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getUserData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setUserData(response);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    let response = await fetch(url + '/' + id, {
      method: 'Delete',
    });
    response = await response.json();
    if (response) {
      alert('User Deleted');
      getUserData();
    }
  };

  const editUser = (id) => {
    navigate('/edit/' + id);
  };

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  return (
    <div>
      <ul className='user-list  user-list-head'>
        <li>Name</li>
        <li>Age</li>
        <li>Email ID</li>
        <li>Action</li>
      </ul>
      {!loading ? (
        userData.map((user) => (
          <ul key={user.name} className='user-list'>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
              <button onClick={() => editUser(user.id)}>Edit</button>
            </li>
          </ul>
        ))
      ) : (
        <h1>Data Loading....</h1>
      )}
    </div>
  );
};

export default UserList;
