import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getusersData();
  }, []);

  const getusersData = async () => {
    const url = 'https://dummyjson.com/users';
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response.users);
  };

  return (
    <div>
      <h1 className='text-xl font-bold'>Fetch Data from API</h1>
      <ul className='user-list user-list-head'>
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age Name</li>
      </ul>
      {usersData &&
        usersData.map((user) => (
          <ul className='user-list'>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))}
    </div>
  );
};

export default App;
