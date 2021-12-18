import React, { useContext, useState } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '../context/userContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
    confirmpassword: '',
  });

  const handleUserAuthentication = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCreds) => {
        toast.success('successfully signed up 🤘');
        setUser({ email: userCreds.user.email, uid: userCreds.user.uid });
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            email: userCredential.user?.email,
            uid: userCredential.user?.uid,
          })
        );
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        toast.error(`Oops!! ${err.message}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmpassword } = inputVal;
    if (email && password && confirmpassword && password === confirmpassword) {
      handleUserAuthentication(email, password);
    } else if (password !== confirmpassword) {
      toast.warn('password does not match');
    } else {
      toast.warn('please give proper values');
    }
  };

  return (
    <Container>
      <h2 className='my-4'>Sign Up</h2>
      <Form className='mx-4' onSubmit={handleSubmit}>
        <FormGroup inline>
          <Label for='email'>Email</Label>
          <Input
            id='email'
            name='email'
            placeholder='Enter email'
            type='email'
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
        <FormGroup>
          <Label for='confirm-password'>Confirm Password</Label>
          <Input
            id='confirm-password'
            name='confirmpassword'
            placeholder='Confirm password'
            type='password'
            value={inputVal['confirmpassword']}
            onChange={(e) =>
              setInputVal({ ...inputVal, confirmpassword: e.target.value })
            }
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

export default Signup;
