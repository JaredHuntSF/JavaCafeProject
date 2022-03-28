/**
 * AccountButton
 * Mimics the 'HeaderButton.js' file; Acts as a header button for AccountInfo screen
 * @authors 
 * @date    2022-03-28 14:02:44
 * @version 1.0.0
 */


import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

const AccountButton = props => {
    return (
        <HeaderButton {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={colors.secondary}
        />
    );
}

export default AccountButton;