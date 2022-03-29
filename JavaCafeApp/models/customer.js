/**
 * Customer:
 * Model for customer object
 * @authors Mo Auguste
 * @date    2022-03-29 14:15:55
 * @version 1.0.0
 */


class Customer {
    constructor(id, name, email, password, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}

export default Customer;