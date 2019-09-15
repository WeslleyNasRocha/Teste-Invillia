import React, { SFC } from 'react';
import { Keyboard, Text } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../../store/reducers/places';
import { Container } from './styles';
import NormalizeGeoResponse from '../../utils/NormalizeGeoResponse';

type Props = ReturnType<typeof mapDispatchToProps> & {
  boundaries: {
    latitudeNE: number;
    latitudeSW: number;
    longitudeNE: number;
    longitudeSW: number;
  };
  onSelect: (place: any) => void;
};

const SearchBar: SFC<Props> = ({ boundaries, setSelected, onSelect }) => {
  const openModal = async () => {
    try {
      const place = await RNGooglePlaces.openAutocompleteModal({
        useOverlay: true,
        useSessionToken: true,
        locationBias: boundaries,
      });
      setSelected(NormalizeGeoResponse(place));
      // onSelect(NormalizeGeoResponse(place));
    } catch (err) {
      console.tron.log(err);
    } finally {
      Keyboard.dismiss();
    }
  };

  return (
    <Container onPress={() => openModal()}>
      <Text>Procurar</Text>
    </Container>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
