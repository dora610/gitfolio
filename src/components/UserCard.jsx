import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from 'reactstrap';

function UserCard({ user }) {
  if (user) {
    return (
      <Card className='mt-3 mb-4'>
        <CardImg
          alt={`${user?.name}`}
          src={`${user?.avatar_url}`}
          className='img-thumbnail'
        />
        <CardBody className='text-center '>
          <CardTitle>{user?.name}</CardTitle>
          <CardSubtitle>{user?.location}</CardSubtitle>
          <CardText>{user?.bio}</CardText>
          <CardText>
            Available for hire: {user?.hireable ? 'Yes' : 'No'}
          </CardText>
          <CardText>Public repos: {user?.public_repos}</CardText>
        </CardBody>
        <CardFooter className='text-right'>
          last updated: {user?.updated_at}
        </CardFooter>
      </Card>
    );
  }
  return <></>;
}

export default UserCard;
