import React, { useContext, useEffect } from 'react';
import UserCard from './UserCard';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { Button, Col, Container, Input, InputGroup, Row } from 'reactstrap';

function Home() {
  const { user, setUser } = useContext(UserContext);
  let testUser = 'dora610';

  useEffect(() => {
    /* axios({
      method: 'GET',
      url: `https://api.github.com/users/${testUser}`,
    }).then((response)=> console.log(response)); */
    console.log('fetch details');
  }, []);

  return (
    <Container>
      <Row className='mt-3'>
        <Col md='5'>
          <InputGroup>
            <Input type='text' placeholder='Search with a user name' />
            <Button className='btn-primary ml-2'>Search User</Button>
          </InputGroup>
        </Col>
        <Col md='7'></Col>
      </Row>
    </Container>
  );
}

export default Home;
