import React from 'react';
import {ScrollView} from 'react-native';
import {Navbar , Header, List, ListComponent} from '../../components';
import {Container} from './styled'

const Home = () => {
  return (
    <Container>
      <Navbar/>
      <Header/>
      <ListComponent/>
    </Container>
);
}

export default Home;