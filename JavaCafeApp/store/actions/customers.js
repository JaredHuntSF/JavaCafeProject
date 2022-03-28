/**
 * Customers:
 * 
 * @authors Mo Auguste
 * @date    2022-03-28 15:01:03
 * @version 1.0.0
 */


export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (id, customerName, email, phone, password) => {
    return dispatch => {
        fetch('https://java-cafe-19cf1-default-rtdb.firebaseio.com/customer');
        dispatch({
            type: ADD_CUSTOMER,
            customerData: {
                id,
                customerName,
                email,
                phone,
                password
            }
        });
    }
}