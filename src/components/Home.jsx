import React, { useState } from 'react';
import UserCard from './UserCard';
import { Button, Col, Container, Input, InputGroup, Row } from 'reactstrap';

import useGithubData from '../hooks/useGithubData';
import RepoDetails from './RepoDetails';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const [{ data, isLoading, error }, setUserName] = useGithubData('');

  return (
    <Container>
      <Row className='mt-3'>
        <Col md='5'>
          <InputGroup>
            <Input
              type='text'
              placeholder='Search with a user name'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button
              className='btn-primary ml-2'
              onClick={(e) => setUserName(searchTerm)}
            >
              Search User
            </Button>
          </InputGroup>
          {error ? (
            <p className='text-error'>{error}</p>
          ) : isLoading ? (
            <h2 className='text-warning'>Loading...</h2>
          ) : (
            <UserCard user={data?.userData} />
          )}
        </Col>
        {!error && (
          <Col md='7'>
            <RepoDetails repos={data?.repoData} />
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Home;
