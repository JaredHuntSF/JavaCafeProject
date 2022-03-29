import { ADD_CUSTOMER } from "../actions/customers";
import Customer from '../../models/customer';
import CUSTOMERS from '../../data/customers-dummy-data';

const initialState = {
    existingCustomers: CUSTOMERS
};

export default (state = initialState, action) => {
    const newCustomer = new Customer(
        new Date().toString(),
        action.customerData.name,
        action.customerData.email,
        action.customerData.password,
        action.customerData.phone
    );

    return {
        ...state,
        existingCustomers: state.existingCustomers.concat(newCustomer)
    };
}
