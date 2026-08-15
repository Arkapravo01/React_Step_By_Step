import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import './App.css';
import UserList from './UserList';
import UserAdd from './UserAdd';

const App = () => {
  return (
    <div>
      <ul className='nav-list'>
        <li>
          <NavLink to='/'>List</NavLink>
        </li>
        <li>
          <NavLink to='/add'>Add User</NavLink>
        </li>
      </ul>
      {/* <h1>Make Routes and Pages for Add User and User List UI</h1> */}
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add' element={<UserAdd />} />
      </Routes>
    </div>
  );
};

export default App;
