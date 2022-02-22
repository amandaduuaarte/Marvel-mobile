import styled from 'styled-components/native';


export const Container = styled.View`
  display: flex;
  flex-flow: column;
  margin:0;
  padding:0;
  background: ${({theme})=>theme.colors.primarywhite};
`;