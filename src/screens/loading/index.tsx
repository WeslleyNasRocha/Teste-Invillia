import React, { SFC, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { Container } from './styles';

type Props = ReturnType<typeof mapStateToProps> & NavigationScreenProps;

const LoadingScreen: SFC<Props> = ({ welcome, navigation }) => {
  useEffect(() => {
    welcome.firstTime
      ? navigation.navigate('Welcome')
      : navigation.navigate('Home');
  }, []);
  return (
    <Container>
      <ActivityIndicator color="purple" size="large" />
    </Container>
  );
};

const mapStateToProps = ({ welcome }) => {
  return {
    welcome,
  };
};

export default connect(mapStateToProps)(LoadingScreen);
