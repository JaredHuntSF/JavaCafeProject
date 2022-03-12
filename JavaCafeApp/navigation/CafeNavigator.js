import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from "react-navigation-stack";
import { Platform } from 'react-native';
import colors from '../constants/colors';
import Menu from '../screens/Menu';
import Checkout from '../screens/Checkout';
import Home from '../screens/Home';
import AccountInfo from '../screens/AccountInformation';
import Allergies from '../screens/Allergies';
import Login from '../screens/Login';

const CafeAppNavigator = createStackNavigator({
    Menu: Menu,
    Checkout: Checkout,
    Login: Login,
    Allergies: Allergies,
    

},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

export default createAppContainer(CafeAppNavigator)