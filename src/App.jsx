import { useState, useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { UserContext } from './context/userContext';
import UserReducer from './reducers/UserReducer';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import fireBaseConfig from './config/fireBaseConfig';
import { ToastContainer } from 'react-toastify';

// Initialize Firebase
const app = initializeApp(fireBaseConfig);
const analytics = getAnalytics(app);

function App() {
  // const [state, dispatch] = useReducer(UserReducer, { userName: 'john' });

  const [user, setUser] = useState(null);

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
