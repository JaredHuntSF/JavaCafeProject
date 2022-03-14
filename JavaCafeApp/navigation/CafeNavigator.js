import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native';
import colors from '../constants/colors';
import Menu from '../screens/Menu';
import Checkout from '../screens/Checkout';
import Home from '../screens/Home';
import AccountInfo from '../screens/AccountInformation';
import Allergies from '../screens/Allergies';
import Login from '../screens/Login';
import StoreSelection from '../screens/StoreSelection';
import PastOrders from '../screens/PastOrders';
import Tip from '../screens/Tip';
import ProductSelection from '../screens/ProductSelection';


const CafeAppNavigator = createStackNavigator({
    Home: Home,
    Menu: Menu,
    Checkout: Checkout,
    Login: Login,
    Allergies: Allergies,
    StoreSelection: StoreSelection,
    Tip: Tip,
    ProductSelection: ProductSelection,
    AccountInfo: AccountInfo



}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

export default createAppContainer(CafeAppNavigator)