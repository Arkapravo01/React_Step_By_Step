import { Link, Route, Routes } from 'react-router';
import About from './About.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import NavBar from './NavBar.jsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
