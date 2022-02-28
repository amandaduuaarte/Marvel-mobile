import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native';
import {Container, TextContainer, CardTitle, Card, CardTexts} from './style';
import {Api} from '../../services/api';


const List = ({children}) =>{
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Api.get('/all').then(response => {
      setCharacters(response.data);
    });
    console.log(characters)
  }, [characters]);
 
  return (
    <Container>
      <TextContainer>
        <CardTitle color="#F2264B" weight="bold" bottom="20px"> 
          {children}
        </CardTitle>
        <CardTitle color="#B7B7B7" >Ver tudo </CardTitle>
      </TextContainer>
      <ScrollView horizontal={true}>
         {characters.map(itens => {
          return (
            <Card> 
              <CardTexts>
                <CardTitle color="#B7B7B7" size="10px">{itens.characters[0].alterEgo}</CardTitle> 
                <CardTitle color="#B7B7B7" size="18px" weight="bold">{itens.characters[0].name}</CardTitle>
              </CardTexts>
            </Card>
          )
        })} 
      
      </ScrollView>
    </Container>
  )
}

export default List;