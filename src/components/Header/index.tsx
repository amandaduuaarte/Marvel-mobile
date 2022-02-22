import React from 'react';
import { Container, WelcomeText, InformationText } from './style';


const Header = () =>{
  return(
    <Container>
      <WelcomeText>Bem vindo ao Marvel Heros</WelcomeText>
      <InformationText>Escolha o seu personagem</InformationText>
    </Container>
  )
}
export default Header