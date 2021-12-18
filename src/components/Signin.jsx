import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signin() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  });

  const handleUserSignIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser({
          email: userCredential.user?.email,
          uid: userCredential.user?.uid,
        });
        toast.success('Successfully signed in 🤘');
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            email: userCredential.user?.email,
            uid: userCredential.user?.uid,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error.message);
        toast.error(errorMessage.split(':')[1]);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const { email, password } = inputVal;
    if (email && password) {
      handleUserSignIn(email, password);
    } else {
      toast.error('Oops! something is wrong');
    }
  };

  return (
    <Container>
      <h2 className='my-4'>Sign In</h2>
      <Form onSubmit={handleSignIn}>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input
            id='username'
            name='username'
            placeholder='Enter user name'
            type='text'
            value={inputVal['email']}
            onChange={(e) =>
              setInputVal({ ...inputVal, email: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for='password'>Password</Label>
          <Input
            id='password'
            name='password'
            placeholder='Enter password'
            type='password'
            value={inputVal['password']}
            onChange={(e) =>
              setInputVal({ ...inputVal, password: e.target.value })
            }
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

export default Signin;
