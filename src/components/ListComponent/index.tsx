import React, { useState, useEffect } from 'react';
import { Container } from './style';
import List from '../List';
import { ScrollView } from 'react-native';
import { Api } from '../../services/api';

const ListComponent = () => {
  const [groupOfCharacters, setgroupOfCharacters] = useState([]);

  useEffect(() => {
    Api.get('/all').then((response) => {
      setgroupOfCharacters(response.data);
    });
  }, [groupOfCharacters]);
  return (
    <ScrollView verticalScroll={true}>
      <Container>
        {groupOfCharacters.map((itens) => {
          return <List> {itens.title} </List>;
        })}
      </Container>
    </ScrollView>
  );
};
export default ListComponent;
