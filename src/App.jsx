import { useState, useReducer, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { UserContext } from './context/userContext';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let userJson = sessionStorage.getItem('user');
    userJson && setUser(JSON.parse(userJson));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <nav>
          <Header />
        </nav>
        <Outlet />
        <footer>
          <Footer />
        </footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
