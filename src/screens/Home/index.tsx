import React from 'react';
import {ScrollView} from 'react-native';
import {Navbar , Header, List} from '../../components';
import {Container} from './styled'

const Home = () => {
  return (
    <Container>
      <Navbar/>
      <Header/>
      <List/>
    </Container>
);
}

export default Home;