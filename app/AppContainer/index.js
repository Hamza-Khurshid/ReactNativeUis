import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../Home';
import LoginScreens from '../Login';
import LoginOne from '../Login/LoginOne';

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreens,
    },
    LoginOne: {
        screen: LoginOne,
    }
  }, {
      initialRouteName: 'LoginOne',
  });

  const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;