import React from 'react';
import {Text, Image} from 'react-native';
import {Container} from './style';
import MenuIcon from '../../assets/images/icons/menu.svg';
import SearchIcon from '../../assets/images/icons/search.svg';
import Logo from '../../assets/images/logo.svg';

const Navbar = () => {
  return(
    <Container>
      <MenuIcon/>
      <Logo/>
      <SearchIcon/>
    </Container>
  )
}
export default Navbar;