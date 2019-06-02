import { createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from '../Home';
import LoginScreens from '../Login';
import LoginOne from '../Login/LoginOne';
import LoginTwo from '../Login/LoginTwo';

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreens,
    },
    LoginOne: {
        screen: LoginOne,
    },
    LoginTwo: {
      screen: LoginTwo
    }
  }, {
      initialRouteName: 'Home',
  });

  const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;