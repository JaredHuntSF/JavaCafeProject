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
import AccountCreated from '../screens/AccountCreated';
import { Ionicons } from '@expo/vector-icons';
import Orders from '../screens/Employee/Orders';
import FulfillOrderScreen from '../screens/Employee/FulfillOrderScreen';
import EmployeeProductScreen from '../screens/Employee/EmployeeProductScreen';
import Debug from '../screens/Debug';


/**
 * wonder if we shift all of the screens with icons down to tab bar
 * and keep the menu sceeen (being it has multiple clickable links)
 * up here; is this what we want?
 */
const CafeAppNavigator = createStackNavigator({
    //AccountRegistration: AccountRegistration,
    //Home: Home,
    //Orders: Orders,
    //FulfillOrderScreen: FulfillOrderScreen,
    Menu: Menu,
    //Checkout: Checkout,
    Allergies: Allergies,
    //StoreSelection: StoreSelection,
    Tip: Tip,
    ProductSelection: ProductSelection,
    AccountInfo: AccountInfo,
    ForgotPassword: ForgotPassword,
    AccountCreated: AccountCreated,
    Login: Login,
    PastOrders: PastOrders,
    EmployeeProductScreen: EmployeeProductScreen,
    Debug: Debug

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

/**
 * Delete this to return things to before
 */
const storeSelectionStack = createStackNavigator({
    StoreSelection: StoreSelection
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

/**
 * Delete this to return things to before
 */
const checkoutStack = createStackNavigator({
    Checkout: Checkout
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

/**
 * Delete this to return things to before
 */
const bottomNavigation = createBottomTabNavigator({
    Home: {
        screen: Home, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='home-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Menu: {
        screen: CafeAppNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='cafe-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    StoreSelection: {
        screen: storeSelectionStack, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='location-sharp' size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Checkout: {
        screen: checkoutStack, navigationOptions: {
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