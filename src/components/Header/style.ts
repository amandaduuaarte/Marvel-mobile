import styled from 'styled-components/native';

export const Container = styled.View`
  height: 55%;
  width: 100%;
  padding: 24px;
`;

export const WelcomeText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  color: ${({theme}) => theme.colors.primarygrey};
`;

export const InformationText = styled.Text`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 8%;
  color: ${({theme}) => theme.colors.primarydark};
`;

export const DivIcons = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`;

export const IconContainer = styled.View.attrs(props => ({
  background: props.background || '#00C6FB',
}))`
  height: 56px;
  width: 56px;
  background: ${props => props.background};
  border-radius: 50px;
  display: flex;
  padding: 16px;
  color: ${({theme}) => theme.colors.primarysilver};
`;
