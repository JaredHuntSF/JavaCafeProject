import * as customerActions from '../actions/customers';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (name, email, password, phone) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmCWaDdTfcnv7SCeLpOvBj_qbsG24EPRY',
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

        if (response.ok) {
            dispatch(
                customerActions.addCustomer(
                    name,
                    email,
                    password,
                    phone
                )
            )
        } else if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();
        console.log(resData);
        dispatch({ type: SIGNUP });
    };
};

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmCWaDdTfcnv7SCeLpOvBj_qbsG24EPRY',
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

        dispatch({ type: LOGIN });
    };
};
