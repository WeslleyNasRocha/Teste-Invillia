import React, { SFC } from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/reducers/welcome';
import { connect } from 'react-redux';
import { Container, Page } from './styles';
import Map from '../../components/map';

type Props = ReturnType<typeof mapDispatchToProps> & NavigationScreenProps;

const HomeScreen: SFC<Props> = props => {
  return (
    <Page>
      <Container>
        <Map navigation={props.navigation} />
      </Container>
    </Page>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(HomeScreen);
