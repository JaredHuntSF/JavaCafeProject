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
import AccountRegistration from '../screens/AccountRegistration';
import ForgotPassword from '../screens/ForgotPassword';


const CafeAppNavigator = createStackNavigator({
    AccountRegistration: AccountRegistration,
    Login: Login,
    Home: Home,
    Menu: Menu,
    Checkout: Checkout,
    Allergies: Allergies,
    StoreSelection: StoreSelection,
    Tip: Tip,
    ProductSelection: ProductSelection,
    AccountInfo: AccountInfo,
    ForgotPassword: ForgotPassword



}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

export default createAppContainer(CafeAppNavigator)