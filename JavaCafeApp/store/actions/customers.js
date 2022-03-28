/**
 * Customers:
 * 
 * @authors Mo Auguste
 * @date    2022-03-28 15:01:03
 * @version 1.0.0
 */


export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (id, customerName, email, phone, password) => {
    return {
        type: ADD_CUSTOMER,
        customerData: {
            id: id,
            customerName: customerName,
            email: email,
            phone: phone,
            password: password
        }
    }
}