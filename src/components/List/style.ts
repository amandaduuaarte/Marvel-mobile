import styled from 'styled-components/native';

export const Container = styled.View`
  height: 45%;
  width: 100%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.View`
  height: 230px;
  width: 140px;
  border-radius: 10px;
  margin-right: 16px;
  background:${({theme}) => theme.colors.primarydark};
  display: flex;
  flex-flow: row;
  align-items: flex-end;
`;

export const CardTexts = styled.View`
  height: 60px;
  width: 90%;
  margin: 12px;
  display: flex;
  flex-flow: column;
`;
export const TextContainer = styled.View`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
export const CardTitle = styled.Text.attrs(props => ({
  color: props.color || '#000000',
  weight: props.weight || 400,
  size: props.size || '18px',
  bottom : props.bottom || '2px',
}))`
  font-size: ${props => props.size};
  line-height: 18px;
  font-weight: ${props=> props.weight};
  margin-bottom: ${props=> props.bottom};
  color: ${props => props.color};
`;