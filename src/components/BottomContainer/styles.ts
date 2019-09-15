import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');
export const BOTTOM_CONTAINER_HEIGHT = height * 0.4;

export const Container = styled.View`
  position: absolute;
  bottom: 8px;
  left: 0px;
  right: 0px;
  background-color: transparent;
  max-height: ${BOTTOM_CONTAINER_HEIGHT};
  justify-content: center;
  align-items: center;
`;

export const BottomContainerButtons = styled.View`
  flex-direction: row;
  width: 100%;
  align-self: flex-end;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: transparent;
`;

export const FetchButtonContainer = styled.TouchableOpacity`
  background-color: ${({ disabled }) => (disabled ? '#DDD' : '#FEFEFE')};
  padding: 8px;
  border-radius: 4px;
  elevation: 1;
  flex-direction: row;
`;

export const CenterButtonContainer = styled.TouchableOpacity`
  align-self: flex-end;
  elevation: 1;
`;
