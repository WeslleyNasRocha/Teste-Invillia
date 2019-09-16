import React, { SFC } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import {
  BottomContainerButtons,
  CenterButtonContainer,
  Container,
  FetchButtonContainer,
} from './styles';

type Props = {
  showButtons: boolean;
  onFetch: () => void;
  onCenter: () => void;
  loading: boolean;
};

const BottomContainer: SFC<Props> = ({
  showButtons,
  onFetch,
  loading,
  onCenter,
  children,
}) => {
  return (
    <Container>
      {showButtons && (
        <BottomContainerButtons>
          <View />
          <FetchButtonContainer disabled={loading} onPress={() => onFetch()}>
            <Text>Buscar nesta área</Text>
            {loading && <ActivityIndicator size="small" />}
          </FetchButtonContainer>
          <CenterButtonContainer onPress={() => onCenter()}>
            <Image
              source={require('../../assets/gps-center.png')}
              style={{ height: 18, width: 18 }}
              resizeMode="contain"
            />
          </CenterButtonContainer>
        </BottomContainerButtons>
      )}
      {children}
    </Container>
  );
};

export default BottomContainer;
