
import { StackNavigator} from "react-navigation";
import IndexPage from './src/pages/indexPage';
import LoginPage from './src/pages/loginPage';
import { AppRegistry } from 'react-native';

const routers = StackNavigator({
    Login: {
        screen: LoginPage,
    },
    Index: {
        screen: IndexPage,
    }
});

AppRegistry.registerComponent('evb', () => routers);
