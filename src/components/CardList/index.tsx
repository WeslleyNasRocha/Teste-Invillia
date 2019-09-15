import React, { useRef, SFC, useEffect, Fragment } from 'react';
import { FlatList, Text, Button } from 'react-native';
import { Card, styles, Title } from './styles';

type Props = {
  onSelect: (id: string) => void;
  places: any;
  selectedPlace: any;
};

const CardsList: SFC<Props> = props => {
  const list = useRef(null);
  const _renderItem = ({ item }) => {
    return (
      <Card onPress={() => props.onSelect(item.id)}>
        <Title numberOfLines={2}>{item.name}</Title>
        <Text>{item.vicinity}</Text>
      </Card>
    );
  };

  useEffect(() => {
    if (props.selectedPlace) {
      const index = props.places.indexOf(props.selectedPlace);
      if (list.current instanceof FlatList) {
        list.current.scrollToIndex({
          animated: true,
          index,
          viewPosition: 0.5,
        });
      }
    }
  }, [props.selectedPlace]);

  return (
    <Fragment>
      <FlatList
        ref={list}
        renderItem={_renderItem}
        horizontal
        style={styles.listStyle}
        contentContainerStyle={styles.listContentStyle}
        data={props.places}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      />
    </Fragment>
  );
};

export default CardsList;
