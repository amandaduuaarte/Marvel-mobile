import styled from 'styled-components/native';

export const Container = styled.View`
  height: 15%;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  background: ${({theme}) => theme.colors.primarywhite};
  padding: 19px 0;
`;