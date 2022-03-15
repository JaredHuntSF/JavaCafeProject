import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'hot',
    'Cappuccino',
    'https://i.imgur.com/CILAxqD.jpeg',
    'A red t-shirt, perfect for days with non-red weather.',
    29.99
  ),
  new Product(
    'p2',
    'hot',
    'Espresso',
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99
  ),
  new Product(
    'p3',
    'hot',
    'Latte',
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    'hot',
    'Hot Tea',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    'hot',
    'Hot Cocoa',
    'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
    'Awesome hardware, and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    'hot',
    'Americano',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p7',
    'hot',
    'Classic Coffee',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p8',
    'hot',
    'Decaf Coffee',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p9',
    'cold',
    'Iced Coffee',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p10',
    'cold',
    'Iced Latte',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p11',
    'cold',
    'Iced Macchiato',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p12',
    'cold',
    'Iced Tea',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p13',
    'cold',
    'Lemonade',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p14',
    'cold',
    'Iced Americano',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p15',
    'cold',
    'Iced Cappuccino',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p16',
    'cold',
    'Iced Latte',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p17',
    'pastry',
    'Cinnamon Roll',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p18',
    'pastry',
    'Macaron',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p19',
    'pastry',
    'Vanilla Bean Scone',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p20',
    'pastry',
    'Eclair',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p21',
    'pastry',
    'Sugar Cookie',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p22',
    'pastry',
    'Chocolate Chip Cookie',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p23',
    'pastry',
    'Glazed Donut',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),
  new Product(
    'p24',
    'pastry',
    'Pen & Paper',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Useful for those who want to take notes.",
    5.49
  ),

];

export default PRODUCTS; //export as a default so that product reducer can import