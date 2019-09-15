import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #159;
`;
