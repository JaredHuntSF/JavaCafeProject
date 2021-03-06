import { AsyncStorage } from 'react-native';

import * as customerActions from '../actions/customers';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const VERIFY = 'VERIFY';

// export const verify = (email) => {
//     return async dispatch => {
//         const response = await fetch(
//             'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCS0SsedwMT3RiFdw0-b8Up17Rf9_7eOj0',
//             {
//                 method: 'POST'
//             }
//         )
//     }
// }

// let timer;

export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        // dispatch(setLogoutTimer(expiryTime));
        dispatch({ type: AUTHENTICATE, userId: userId, token: token });
    };
};

//TODO remove name, and phone if implementing account details separately
export const signup = (name, email, password, phone) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCS0SsedwMT3RiFdw0-b8Up17Rf9_7eOj0',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    returnSecureToken: true
                })
            }
        );

        // TODO maybe place account details separate frpm this
        if (response.ok) {
            const resData = await response.json();
            console.log('Sign Up: ', resData);

            const customerId = resData.localId;
            console.log('User Id: ', customerId);
            dispatch(
                customerActions.addCustomer(
                    customerId,
                    name,
                    email,
                    phone
                )
            )
        } else if (!response.ok) {
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = '';
            if (errorId) {
                message = 'Fill in all inputs.';
            }
            throw new Error(message);
        }

        const resData = await response.json();
        console.log(resData);
        dispatch(
            authenticate(
                resData.localId,
                resData.idToken,
                // parseInt(resData.expiresIn) * 1000
            )
        );
        // const expirationDate = new Date(
        //     new Date().getTime() + parseInt(resData.expiresIn) * 1000
        // );
        // saveDataToStorage(resData.idToken, resData.localId);
    };

    // const resData = await response.json();
    // console.log('Sign Up: ', resData);

    // const customerId = resData.localId;
    // console.log('User Id: ', customerId);

    // dispatch({ type: SIGNUP });
};

export const login = (email, password) => {
    return async (dispatch, getState) => {

        console.log(getState);

        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCS0SsedwMT3RiFdw0-b8Up17Rf9_7eOj0',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );

        if (!response.ok) {
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = '';
            if (errorId == 'EMAIL_NOT_FOUND' || 'INVALID_PASSWORD') {
                message = 'Email and/or Password is invalid.';
            }
            throw new Error(message);
        }


        // const resData = await response.json();
        // console.log(resData);

        const resData = await response.json();
        console.log(resData);
        dispatch(
            authenticate(
                resData.localId,
                resData.idToken,
                // parseInt(resData.expiresIn) * 1000
            )
        );
        // const expirationDate = new Date(
        //     new Date().getTime() + parseInt(resData.expiresIn) * 1000
        // );
        // saveDataToStorage(resData.idToken, resData.localId);
    };
};

