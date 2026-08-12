import { Link, Navigate, Route, Routes } from 'react-router';
import About from './About.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import NavBar from './NavBar.jsx';
import PageNotFound from './PageNotFound.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/*' element={<gaPageNotFound />} /> */}
        <Route path='/*' element={<Navigate to='/login' />} />
      </Routes>
    </>
  );
};

export default App;
