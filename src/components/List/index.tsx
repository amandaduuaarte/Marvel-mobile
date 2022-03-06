import React, { useState, useEffect } from 'react';
import { ScrollView, FlatList } from 'react-native';
import {
  Container,
  TextContainer,
  CardTitle,
  Card,
  BackgroundCard,
  CardTexts,
} from './style';
import { Api } from '../../services/api';
import img from '../../assets/images/chars/spider-man.png';

const List = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Api.get('/all').then((response) => {
      setCharacters(response.data);
    });
  }, [characters]);

  return (
    <Container>
      <TextContainer>
        <CardTitle color="#F2264B" weight="bold" bottom="20px">
          {children}
        </CardTitle>
        <CardTitle color="#B7B7B7">Ver tudo </CardTitle>
      </TextContainer>
      <ScrollView horizontal={true}>
        {characters.map((itens) => {
          return (
            <Card>
              <BackgroundCard source={img} />
              <CardTexts>
                <CardTitle color="#B7B7B7" size="10px">
                  {itens.characters[0].alterEgo}
                </CardTitle>
                <CardTitle color="#ffff" size="18px" weight="bold">
                  {itens.characters[0].name}
                </CardTitle>
              </CardTexts>
            </Card>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default List;
