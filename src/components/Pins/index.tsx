import React, { Fragment, SFC } from 'react';

import { View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { connect } from 'react-redux';

type Props = ReturnType<typeof mapStateToProps> & {
  onSelect: (selectedId: string) => void;
  onDeselect: () => void;
};

const Pins: SFC<Props> = props => {
  const renderAnnotations = () => {
    const items = [];
    const { places, loading } = props.placeList;
    if (!loading) {
      places.map(place => {
        const {
          id,
          name,
          geometry: {
            location: { lat, lng },
          },
        } = place;
        items.push(
          <MapboxGL.PointAnnotation
            key={id}
            id={id}
            coordinate={[lng, lat]}
            onSelected={() => {
              props.onSelect(id);
            }}
            onDeselected={() => {
              props.onDeselect();
            }}
            title={name}>
            <MapboxGL.Callout title={name} />
          </MapboxGL.PointAnnotation>,
        );
      });
    }
    return items;
  };
  return <Fragment>{renderAnnotations()}</Fragment>;
};

const mapStateToProps = ({ places }) => ({ placeList: places });

export default connect(mapStateToProps)(Pins);
