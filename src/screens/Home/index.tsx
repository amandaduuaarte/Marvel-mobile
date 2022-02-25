import React from 'react';
import {ScrollView} from 'react-native';
import {Navbar , Header, List} from '../../components';
import {Container} from './styled'

const Home = () => {
  return (
  <ScrollView>
      <Container>
        <Navbar/>
        <Header/>
        <List/>
      </Container>
  </ScrollView>
);
}

export default Home;