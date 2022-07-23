const Product = require('../domain/product');
const Price = require('../domain/price');
const Cart = require('../domain/cart');
const Item = require('../domain/item');
const Order = require('../domain/order');
const PriceCalculator = require('../domainService/priceCalculator');

function getIdGenerator() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

function main() {
  const cartIdGenerator = getIdGenerator();

  const cart1 = new Cart(cartIdGenerator());
  // const cart2 = new Cart(cartIdGenerator());

  // const pencil = new Product('Apple Pencil', new Price(5, 'USD'));
  // const item1 = new Item(pencil, 2);
  // cart1.addItem(item1);
  // cart2.addItem(item1);

  const headphone = new Product('Sony Wireless headphone', new Price(1, 'USD'));
  const item2 = new Item(headphone, 2);
  cart1.addItem(item2);
  // cart2.addItem(item2);

  // cart1.removeItem(item1);
  // cart2.removeItem(item1);

  // console.log(cart1.toString());
  // console.log(cart2.toString());

  // console.log(cart1.equals(cart2));
  // console.log(cart1.equals(cart1));
  // console.log(cart2.equals(cart2));

  const competitorProducts = {
    'Apple Pencil': new Price(5, 'USD'),
    'Sony Wireless headphone': new Price(1, 'USD'),
  };

  const priceCalculator = new PriceCalculator(competitorProducts);
  const discountedPrice = priceCalculator.getDiscountedPrice(
    'Apple Pencil',
    10
  );

  const pencil2 = new Product(
    'Apple Pencil',
    new Price(discountedPrice, 'USD')
  );

  const item3 = new Item(pencil2, 1);
  cart1.addItem(item3);
  const order = new Order(cart1.checkOut());
  console.log(order.toString());
}

main();
