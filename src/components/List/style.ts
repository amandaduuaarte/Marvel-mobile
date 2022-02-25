import styled from 'styled-components/native';

export const Container = styled.View`
  height:45%;
  width: 100%;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  justify-content:space-between;
  margin-top: 48px;
`;

export const Card = styled.View`
  height: 230px;
  width: 140px;
  border-radius:10px;
  margin-right: 16px;
  background: red;
`;

export const TextContainer = styled.View`
  display:flex;
  flex-flow: row;
  justify-content: space-between;
`;
export const CardTitle = styled.Text.attrs(props => ({
  color: props.color || '#000000',
  weight: props.weight || 400,
}))`
  font-size: 18px;
  line-height: 18px;
  font-weight: ${props=> props.weight};
  margin-bottom: 16px;
  color: ${props => props.color};
`;