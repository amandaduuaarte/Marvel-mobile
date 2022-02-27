import React from 'react';
import { Container } from './style';
import List  from '../List';
import { ScrollView } from 'react-native';

const ListComponent = () =>{
  return (
    <ScrollView verticalScroll={true}>
      <Container>
        <List> Herois </List>
        <List> Vilões </List>
        <List> Anti-herois </List>
        <List> Anti-herois </List>
      </Container>
    </ScrollView>
  )
}
export default ListComponent;
