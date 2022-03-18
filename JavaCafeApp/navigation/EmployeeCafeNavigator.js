/**
 * EmployeeCafeNavigator:
 * Navigation for employee-facing portion of application
 * @authors Mo Auguste
 * @date    2022-03-17 22:59:48
 * @version 1.0.0
 */


import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Orders from '../screens/Employee/Orders';

headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} ></HeaderButtons>

const EmployeeCafeNavigator = createStackNavigator({
    Orders: {
        screen: Orders,
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} ></HeaderButtons>
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'black'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'white'
    }
});

const employeeBottomNavigation = ({
    Orders: EmployeeCafeNavigator
}, {
    tabBarOptions: {
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        style: {
            backgroundColor: colors.primary
        }
    }
});

export default createAppContainer(employeeBottomNavigation);
