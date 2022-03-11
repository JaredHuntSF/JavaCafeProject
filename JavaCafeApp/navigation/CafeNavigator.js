import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from "react-navigation-stack";
import { Platform } from 'react-native'
import colors from '../constants/colors';
import Menu from '../screens/Menu';


const CafeAppNavigator = createStackNavigator({
    Menu: Menu
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
    }
});

export default createAppContainer(CafeAppNavigator)