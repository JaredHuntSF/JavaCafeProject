import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
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
import { Ionicons } from '@expo/vector-icons';


const CafeAppNavigator = createStackNavigator({
    Login: Login,
    AccountRegistration: AccountRegistration,
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

const bottomNavigation = createBottomTabNavigator({
    Home: {
        screen: Home, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='home-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Menu: {
        screen: Menu, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='cafe-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    StoreSelection: {
        screen: StoreSelection, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='location-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Checkout: {
        screen: Checkout, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='cart-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        style: {
            backgroundColor: colors.primary
        }
    }
});

export default createAppContainer(bottomNavigation) //**pass CafeAppNavigator instead to return things to before**