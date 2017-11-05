const db = require('./server/db/index');
const { Product, Order, User, Review, Category, ProductCategories, OrderProducts } = require('./server/db/models/index');


const users = [{ email: 'thequeen@england.com', password: 'password', googleId: 'queeny', isAdmin: false },
                { email: 'theking@england.com', password: '123', googleId: 'bigboss', isAdmin: false },
              { email: 'jonsnow@thenorth.com', password: 'iknownothing', googleId: 'jonnysnow', isAdmin: false },
            ];

const reviews = [
  { stars: 5, title: 'Best Ever', text: 'wooooooooooooooooooooooooooooooooooooooooo', userId: 1, productId: 1},
  { stars: 4, title: 'Pretty good', text: 'meh', userId: 1, productId: 2},
  { stars: 1, title: 'It sucked', text: 'dissapoint', userId: 3, productId: 3},
  { stars: 2, title: 'Bad', text: 'would not recommend', userId: 2, productId: 2}
];

const products = [
  { title: 'Dragon1', description: 'dragon 1', price: '82', quantity: 7, image:"https://thumbs.dreamstime.com/z/vector-cute-smiling-happy-dragon-as-cartoon-toy-22305702.jpg"},
  { title: 'Dragon2', description: 'dragon 2', price: '97', quantity: 4, image: "https://previews.123rf.com/images/nataka/nataka1304/nataka130400010/19088142-cute-dragon-vector-Stock-Vector-baby.jpg"},
  { title: 'Dragon3', description: 'dragon 3', price: 67, quantity: 2 },
  { title: 'Dragon4', description: 'dragon 4', price: 88,
  quantity: 9, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Komodo_dragon01.JPG/220px-Komodo_dragon01.JPG' },
  { title: 'Hungarian Horntail', description: 'The famously deadly dragon, as seen on Harry Potter!', price: 67, quantity: 2, image: "http://media.immediate.co.uk/volatile/sites/3/2016/10/119142.jpg?quality=90&resize=620,413"},
  {title: "Ord", description: "There's Ord, he's the biggest, not so brave of heart.", price: 0, quantity: 1, image: "http://imgs.tuts.dragoart.com/how-to-draw-ord-from-dragon-tales_1_000000002730_5.jpg"},
  {title: "Zack and Weezy", description: "'Cuz you know two heads are better than one.'", price: 0, quantity: 2, image: "http://vignette1.wikia.nocookie.net/dragontalespedia/images/e/e0/Dragontales_zakwheezie.jpg/revision/latest?cb=20110312205711"},
]

const categories = [
  { name: 'blue' }, { name: 'red' }, { name: 'green' }, { name: 'purple' }
]

const productCategories = [
  { productId: 1, categoryId: 2 },
  { productId: 2, categoryId: 3 },
  { productId: 3, categoryId: 4 },
  { productId: 4, categoryId: 3 },
  { productId: 5, categoryId: 4 },
  { productId: 6, categoryId: 1 },
  { productId: 7, categoryId: 3 },
  { productId: 7, categoryId: 4 },
]

const orders = [
  { date: '2016-08-09 07:42:28', status: 'Open', userId: 1},
  { date: '2016-08-09 07:42:28', status: 'Completed', userId: 2 },
  { date: '2016-08-09 07:42:28', status: 'Processing', userId: 3 }
]

const orderProducts = [
  { currentPrice: 82, quantity: 2, productId: 1, orderId: 1 },
  { currentPrice: 77, quantity: 1, productId: 2, orderId: 1 },
  { currentPrice: 22, quantity: 1, productId: 3, orderId:
  2 },
  { currentPrice: 13, quantity: 2, productId: 4, orderId: 2 },
  { currentPrice: 56, quantity: 1, productId: 2, orderId:
  3}

]

const seed = () =>
  Promise.all(products.map(product =>
    Product.create(product))
  )
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  ))
  .then(() =>
  Promise.all(orders.map(order =>
    Order.create(order))
  ))
  .then(() =>
  Promise.all(reviews.map(review =>
    Review.create(review))
  ))
  .then(() =>
  Promise.all(categories.map(category =>
    Category.create(category))
  ))
  .then(() =>
  Promise.all(productCategories.map(productCategory =>
    ProductCategories.create(productCategory))
  ))
  .then(() =>
  Promise.all(orderProducts.map(orderProduct =>
    OrderProducts.create(orderProduct))
  ))

const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
