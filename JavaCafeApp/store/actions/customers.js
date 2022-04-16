/**
 * Customers:
 * Handles necessary functions for adding customer data to db
 * @authors Mo Auguste
 * @date    2022-03-28 15:01:03
 * @version 1.0.0
 */


export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (customerId, customerName, email, phone) => {
    return async dispatch => {
        const response = await fetch('https://java-cafe-728d1-default-rtdb.firebaseio.com/customer.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customerId,
                customerName,
                email,
                phone
            })
        });

        const responseData = await response.json();

        console.log(responseData);
        console.log(responseData.name);

        /**
         * CAN PLACE SIGNUP ACTION ID HERE BY USING 467
         */
        dispatch({
            type: ADD_CUSTOMER,
            customerData: {
                id: responseData.name,
                customerName,
                email,
                phone
            }
        });
    };
};