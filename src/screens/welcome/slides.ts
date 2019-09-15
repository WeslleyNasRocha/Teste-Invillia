import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default [
  {
    key: '1',
    title: 'Bem-vindo',
    titleStyle: {
      fontSize: 34,
      color: '#000',
    },
    image: require('../../assets/welcome.jpg'),
    imageStyle: { width, height: height * 0.5 },
    backgroundColor: '#fff',
    buttonStyle: {
      color: '#000',
    },
  },
  {
    key: '2',
    // title: 'Title 2',
    textStyle: {
      color: '#000',
      fontSize: 24,
    },
    text:
      'Vamos te ajudar a achar os lugares que vocês mais gosta, bem pertinho de você',
    image: require('../../assets/gps.jpg'),
    imageStyle: { width, height: height * 0.5 },
    backgroundColor: '#fff',
  },
  {
    key: '3',
    text: 'Vamos começar!',
    textStyle: {
      color: '#000',
      fontSize: 24,
    },
    image: require('../../assets/go.jpg'),
    imageStyle: { width, height: height * 0.5 },
    backgroundColor: '#fff',
  },
];
