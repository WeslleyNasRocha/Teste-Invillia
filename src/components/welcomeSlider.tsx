import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const MainContent = styled.View<{ item: any }>`
  justify-content: space-around;
  align-items: center;
  flex: 1;
  color: #000;
  background-color: ${({ item }) => item.backgroundColor};
  width: ${width};
  padding-bottom: 64px;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 16px;
  text-align: center;
  font-weight: 300;
  padding: 0px 16px;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 26px;
  font-weight: 300;
  padding: 0px 0px;
`;
