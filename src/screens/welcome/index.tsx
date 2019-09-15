import React, { SFC } from 'react';
import { Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/reducers/welcome';
import slides from './slides';

type Props = ReturnType<typeof mapDispatchToProps> & NavigationScreenProps;

const WelcomeScreen: SFC<Props> = props => {
  const skipIntro = () => {
    props.skipIntro();
    props.navigation.navigate('App');
  };

  return (
    <AppIntroSlider
      slides={slides}
      buttonTextStyle={{ color: '#000' }}
      activeDotStyle={{ backgroundColor: '#159' }}
      skipLabel="Pular"
      doneLabel="Vamos lá!"
      nextLabel="Próximo"
      prevLabel="Anterior"
      showPrevButton
      showSkipButton
      onDone={() => skipIntro()}
    />
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(WelcomeScreen);
