import { Link, Navigate, Route, Routes } from 'react-router';
import About from './About.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import NavBar from './NavBar.jsx';
import PageNotFound from './PageNotFound.jsx';
import College from './College.jsx';
import Student from './Student.jsx';
import Department from './Department.jsx';
import Details from './Details.jsx';
import UserList from './UserList.jsx';
import UserDetails from './UserDetails.jsx';

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/users/list?' element={<UserList/>}/>

          <Route path='/users/:id/:name?' element={<UserDetails/>}/>

          <Route path='in'>
            <Route path='user'>
              <Route path='login' element={<Login />} />
              <Route path='about' element={<About />} />
            </Route>
          </Route>

          <Route path='/college' element={<College />}>
            <Route index element={<Student />} />
            <Route path='department' element={<Department />} />
            <Route path='details' element={<Details />} />
          </Route>
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/*' element={<Navigate to='/login' />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
