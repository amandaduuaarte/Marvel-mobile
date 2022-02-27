import styled from 'styled-components/native';


export const Container = styled.View`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  margin:0;
  padding:0;
  background: ${({theme})=>theme.colors.primarywhite};
`;