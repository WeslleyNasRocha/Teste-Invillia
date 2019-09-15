import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import { BOTTOM_CONTAINER_HEIGHT } from '../BottomContainer/styles';

export const Card = styled.TouchableOpacity`
  height: ${BOTTOM_CONTAINER_HEIGHT * 0.7};
  width: ${BOTTOM_CONTAINER_HEIGHT * 0.7};
  background-color: #fff;
  margin: 0px 8px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  elevation: 1;
`;

export const Title = styled.Text`
  padding: 6px;
  font-size: 18px;
  color: #222;
`;

export const styles = StyleSheet.create({
  listStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  listContentStyle: {
    justifyContent: 'center',
  },
});
