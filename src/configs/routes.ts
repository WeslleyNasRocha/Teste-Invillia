import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/home';
import LoadingScreen from '../screens/loading';
import WelcomeScreen from '../screens/welcome';

const AppStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(
  createSwitchNavigator({
    Loading: LoadingScreen,
    Welcome: WelcomeScreen,
    App: AppStack,
  }),
);
