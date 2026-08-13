import { Link, NavLink, Outlet } from 'react-router';
import './header.css';

const NavBar = () => {
  return (
    <div>
      <div className='header'>
        <div>
          <Link className='link' to='/'>
            <h2>Logo</h2>
          </Link>
        </div>

        <div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link custom-active' : 'link'
                }
                to='/'
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link custom-active' : 'link'
                }
                to='/in/user/login'
              >
                Login
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link custom-active' : 'link'
                }
                to='/in/user/about'
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link custom-active' : 'link'
                }
                to='/college'
              >
                College
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link custom-active' : 'link'
                }
                to='/users'
              >
                Users
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link custom-active' : 'link'
                }
                to='/users/list'
              >
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default NavBar;