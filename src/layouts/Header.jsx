import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Button,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';

import '../assets/css/Header.css';
import { UserContext } from '../context/userContext';

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const { user, setUser } = useContext(UserContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid d-flex justify-content-between'>
        <Link to='/profile' className='navbar-brand active'>
          Home
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded={`${isNavCollapsed}`}
          aria-label='Toggle navigation'
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {user?.email ? (
              <>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-link'>
                    Welcome {user?.email}
                  </Link>
                </li>
                <li className='nav-item'>
                  <span
                    onClick={() => {
                      setUser(null);
                      sessionStorage.removeItem('user');
                    }}
                    className='nav-link'
                    style={{ cursor: 'pointer' }}
                  >
                    Sign Out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link to='/signin' className='nav-link'>
                    Sign In
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-link'>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
