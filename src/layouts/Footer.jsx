import React from 'react';
import { Button, Container } from 'reactstrap';

function Footer() {
  return (
    <Container
      fluid
      tag='footer'
      className='text-white text-center bg-primary fixed-bottom py-1'
    >
      For more info{' '}
      <Button color='warning' outline>
        Contact Us
      </Button>
    </Container>
  );
}

export default Footer;
