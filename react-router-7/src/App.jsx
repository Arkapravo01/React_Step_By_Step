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

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Route>

        <Route path='/college' element={<College />}>
          <Route index element={<Student />} />
          <Route path='department' element={<Department />} />
          <Route path='details' element={<Details />} />
        </Route>
        {/* <Route path='/*' element={<PageNotFound />} /> */}
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </>
  );
};

export default App;
