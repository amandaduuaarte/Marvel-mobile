import React from 'react';
import {ScrollView} from 'react-native';
import {Container, TextContainer, CardTitle, Card} from './style';


const List = ({children}) =>{
  return (
    <Container>
      <TextContainer>
        <CardTitle color="#F2264B" weight="bold"> 
          {children}
        </CardTitle>
        <CardTitle color="#B7B7B7" >Ver tudo</CardTitle>
      </TextContainer>
      <ScrollView horizontal={true}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </Container>
  )
}

export default List;