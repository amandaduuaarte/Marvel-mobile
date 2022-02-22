import styled from 'styled-components/native';

export const Container = styled.View`
  height:40%;
  width:100%;
  padding: 24px;
`;

export const WelcomeText = styled.Text`
  font-size:16px;
  font-weight:700;
  margin-bottom:5px;
  color:${({theme})=> theme.colors.primarygrey};
`;

export const InformationText = styled.Text`
  font-size:40px;
  font-weight:700;
  color:${({theme})=> theme.colors.primarydark};
`;