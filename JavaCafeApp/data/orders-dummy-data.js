class Order {
    constructor(id, date, customerFirstName, customerLastName, saleItems) {
        this.id = id;
        this.date = date;
        this.customerFirstName = customerFirstName;
        this.customerLastName = customerLastName;
        this.saleItems = saleItems;
    }
}
const orderItems = ['Large Coffee', 'Small Coffee', 'Small Tea']
const CUSTOMER_ORDERS = [
    new Order(
        '66',
        '03/17/22',
        'Mike',
        'L.',
        orderItems
    ),
    new Order(
        '65',
        '03/17/22',
        'Mike',
        'L.',
        orderItems
    ),
    new Order(
        '64',
        '03/17/22',
        'Mike',
        'L.',
        orderItems
    ),
    new Order(
        '63',
        '03/17/22',
        'Mike',
        'L.',
        orderItems
    )
];

export default CUSTOMER_ORDERS;