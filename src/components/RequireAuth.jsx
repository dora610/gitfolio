import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/userContext';

function RequireAuth({ children }) {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  console.log(user);

  if (user && user.email) {
    return <div>{children}</div>;
  } else {
    return <Navigate to='/signin' state={{ from: location }} />;
  }
}
export default RequireAuth;
