import React from 'react';
import { Navbar, Header, ListComponent } from '../../components';
import { Container } from './styled';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <ListComponent />
    </Container>
  );
};

export default Home;
