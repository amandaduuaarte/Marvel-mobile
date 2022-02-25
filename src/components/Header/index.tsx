import React from 'react';
import { 
  Container, 
  WelcomeText, 
  InformationText, 
  DivIcons, 
  IconContainer,
} from './style';

import Alien from '../../assets/images/icons/alien.svg';
import Hero from '../../assets/images/icons/hero.svg';
import Villain from '../../assets/images/icons/villain.svg';
import AntiHero from '../../assets/images/icons/antihero.svg';
import Human from '../../assets/images/icons/human.svg';


const Header = () =>{
  return(
    <Container>
      <WelcomeText>Bem vindo ao Marvel Heros</WelcomeText>
      <InformationText>Escolha o seu personagem</InformationText>

      <DivIcons>
        <IconContainer>
        <Hero/>
        </IconContainer>
        <IconContainer
         background="#F2264B">
           <Villain/>
        </IconContainer>
        <IconContainer
        background="#B224EF">
          <AntiHero/>
        </IconContainer>
        <IconContainer
        background="#0BA360">
          <Alien/>
        </IconContainer>
        <IconContainer
        background="#FF7EB3">
          <Human/>
        </IconContainer>
      </DivIcons>
    </Container>
  )
}
export default Header