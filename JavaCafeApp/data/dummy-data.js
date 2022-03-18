import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'hot',
    'Cappuccino',
    'https://i.imgur.com/axjV5Ac.jpeg',
    'A red t-shirt, perfect for days with non-red weather.',
    29.99
  ),
  new Product(
    'p2',
    'hot',
    'Espresso',
    'https://i.imgur.com/jhXv3Sr.jpeg',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99
  ),
  new Product(
    'p3',
    'hot',
    'Latte',
    'https://i.imgur.com/CILAxqD.jpeg',
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    'hot',
    'Hot Tea',
    'https://i.imgur.com/MSuKFGW.jpeg',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    'hot',
    'Hot Cocoa',
    'https://i.imgur.com/cpXHh0c.jpg',
    'Awesome hardware, and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    'hot',
    'Americano',
    'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p7',
    'hot',
    'Classic Coffee',
    'https://i.imgur.com/H3J1ZpG.jpeg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p8',
    'hot',
    'Decaf Coffee',
    'https://i.imgur.com/680H2rh.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p9',
    'cold',
    'Iced Coffee',
    'https://i.imgur.com/ZSO5AiU.jpeg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p10',
    'cold',
    'Iced Latte',
    'https://i.imgur.com/591TAjZ.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p11',
    'cold',
    'Iced Macchiato',
    'https://i.imgur.com/KnyL812.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p12',
    'cold',
    'Iced Tea',
    'https://i.imgur.com/7EE4oLK.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p13',
    'cold',
    'Lemonade',
    'https://i.imgur.com/Ny9449i.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p14',
    'cold',
    'Iced Americano',
    'https://i.imgur.com/KnyL812.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p15',
    'cold',
    'Iced Cappuccino',
    'https://images.unsplash.com/photo-1520031607889-97ba0c7190ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p16',
    'cold',
    'Iced Latte',
    'https://i.imgur.com/ZSO5AiU.jpeg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p17',
    'pastry',
    'Cinnamon Roll',
    'https://i.imgur.com/564sxiU.jpeg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p18',
    'pastry',
    'Macaron',
    'https://i.imgur.com/lBJ7PVc.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p19',
    'pastry',
    'Vanilla Bean Scone',
    'https://i.imgur.com/Za9aHvn.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p20',
    'pastry',
    'Eclair',
    'https://i.imgur.com/zZxSj8U.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p21',
    'pastry',
    'Sugar Cookie',
    'https://i.imgur.com/XgyPMvb.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p22',
    'pastry',
    'Chocolate Chip Cookie',
    'https://i.imgur.com/rjFOjED.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p23',
    'pastry',
    'Glazed Donut',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p24',
    'pastry',
    'Java Delight',
    'https://i.imgur.com/MkQ0H1x.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),

];

export default PRODUCTS; //export as a default so that product reducer can import