import React, { SFC } from 'react';

import { View, Image, Text, ActivityIndicator } from 'react-native';
import {
  Container,
  BottomContainerButtons,
  FetchButtonContainer,
  CenterButtonContainer,
} from './styles';
import CardsList from '../CardList';

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
