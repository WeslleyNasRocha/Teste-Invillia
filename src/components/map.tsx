import MapboxGL from '@react-native-mapbox-gl/maps';
import React, { Fragment, SFC, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { NavigationScreenProps } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators } from '../store/reducers/places';
import { usePermission } from '../utils/hooks';
import CardsList from './CardList';
import Pins from './Pins';
import SearchBar from './SearchBar';
import BottomContainer from './BottomContainer';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  NavigationScreenProps;

const Map: SFC<Props> = props => {
  const [userCoords, setUserCoords] = useState([0, 0]);
  const [coords, setCoords] = useState([-47.0616, -22.9064]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showBottomContainer, setShowBottomContainer] = useState(false);
  const [isOffcenter, setIsOffcenter] = useState(false);
  const [boundaries, setBoundaries] = useState(null);

  const cameraRef = useRef(null);
  const mapViewRef = useRef(null);

  const locationPermission = usePermission(
    'android.permission.ACCESS_FINE_LOCATION',
  );

  /**
   * Get user position effect
   */
  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        setCoords([longitude, latitude]);
      },
      null,
      { enableHighAccuracy: false, timeout: 15000 },
    );
  }, [locationPermission]);

  // useEffect(() => {
  //   const watchId = Geolocation.watchPosition(
  //     ({ coords: { longitude, latitude } }) => {
  //       setUserCoords([longitude, latitude]);
  //     },
  //     null,
  //     { enableHighAccuracy: false, timeout: 15000 },
  //   );
  //   return () => {
  //     Geolocation.clearWatch(watchId);
  //   };
  // }, [userCoords, locationPermission]);

  useEffect(() => {
    if (selectedPlace && selectedPlace.geometry.location) {
      const { lat, lng } = selectedPlace.geometry.location;
      if (cameraRef.current) {
        cameraRef.current.flyTo([lng, lat]);
      }
    }
  }, [selectedPlace]);

  useEffect(() => {
    const [longitude, latitude] = coords;
    props.fetch({ longitude, latitude });
  }, [coords]);

  // useEffect(() => {
  //   if (mapViewRef.current instanceof MapboxGL.MapView) {
  //     mapViewRef.current.getVisibleBounds().then(boundaries => {
  //       const [
  //         [latitudeSW, latitudeNE],
  //         [longitudeSW, longitudeNE],
  //       ] = boundaries;
  //       setBoundaries({
  //         latitudeNE,
  //         latitudeSW,
  //         longitudeNE,
  //         longitudeSW,
  //       });
  //     });
  //   }
  // }, [coords]);

  if (locationPermission) {
    return (
      <Fragment>
        <MapboxGL.MapView
          onDidFinishLoadingMap={() => setShowBottomContainer(true)}
          onRegionIsChanging={() => {
            if (mapViewRef.current instanceof MapboxGL.MapView) {
              mapViewRef.current.getCenter().then(center => {
                setIsOffcenter(
                  center[0].toFixed(7) !== userCoords[0].toFixed(7) ||
                    center[1].toFixed(7) !== userCoords[1].toFixed(7),
                );
              });
            }
          }}
          ref={mapViewRef}
          style={{ flex: 1 }}>
          <MapboxGL.UserLocation />
          <MapboxGL.Camera
            ref={cameraRef}
            zoomLevel={17}
            centerCoordinate={coords}
          />
          <Pins
            onSelect={id =>
              setSelectedPlace(
                props.placeList.places.find(place => place.id === id),
              )
            }
            onDeselect={() => setSelectedPlace(null)}
          />
        </MapboxGL.MapView>

        {showBottomContainer && (
          <Fragment>
            <SearchBar
              boundaries={boundaries}
              onSelect={place => {
                console.tron.log(place);
                console.tron.log(props.placeList);
              }}
            />
            <BottomContainer
              showButtons={isOffcenter}
              loading={props.placeList.loading}
              onFetch={async () => {
                if (mapViewRef.current instanceof MapboxGL.MapView) {
                  const coords = await mapViewRef.current.getCenter();
                  setCoords(coords);
                }
              }}
              onCenter={() => {
                if (cameraRef.current) {
                  cameraRef.current.flyTo(userCoords);
                }
              }}>
              <CardsList
                selectedPlace={selectedPlace}
                onSelect={id =>
                  setSelectedPlace(
                    props.placeList.places.find(place => place.id === id),
                  )
                }
                places={props.placeList.places}
              />
            </BottomContainer>
          </Fragment>
        )}
      </Fragment>
    );
  } else {
    return <View />;
  }
};

const mapStateToProps = ({ places }) => ({ placeList: places });

const mapDispatchToProps = dispatch => bindActionCreators(Creators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
