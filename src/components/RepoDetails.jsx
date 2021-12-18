import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function RepoDetails({ repos }) {
  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo?.id}>
          <div className='text-primary'>{repo?.name}</div>
          <div className='text-info'>{repo?.full_name}</div>
          <div className='text-secondary'>{repo?.language}</div>
          <div className='text-secondary'>{repo?.description}</div>
          <div className='text-secondary'>{repo?.language}</div>
          {repo?.visibility === 'public' ? (
            <div className='text-warn'>{repo?.visibility} repo</div>
          ) : (
            <div className='text-error'>{repo?.visibility} repo</div>
          )}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default RepoDetails;
