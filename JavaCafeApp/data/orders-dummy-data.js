class Order {
    constructor(id, date, customerFirstName, customerLastName) {
        this.id = id;
        this.date = date;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
    }
}

const CUSTOMER_ORDERS = [
    new Order(
        '66',
        '03/17/22',
        'Mike',
        'L.'
    ),
    new Order(
        '65',
        '03/17/22',
        'Mike',
        'L.'
    ),
    new Order(
        '64',
        '03/17/22',
        'Mike',
        'L.'
    ),
    new Order(
        '63',
        '03/17/22',
        'Mike',
        'L.'
    )
];

export default CUSTOMER_ORDERS;