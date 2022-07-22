const Product = require('./product');
const Cart = require('./cart');
const Item = require('./item');

function getIdGenerator() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

function main() {
  const cartIdGenerator = getIdGenerator();

  const cart1 = new Cart(cartIdGenerator);
  const cart2 = new Cart(cartIdGenerator);

  const pencil = new Product('Apple Pencil');
  const item1 = new Item(pencil, 2);
  cart1.addItem(item1);
  cart2.addItem(item1);

  const headphone = new Product('Sony Wireless headphone');
  const item2 = new Item(headphone);
  cart1.addItem(item2);
  cart2.addItem(item2);

  cart1.removeItem(item1);
  cart2.removeItem(item1);

  console.log(cart1.toString());
  console.log(cart2.toString());

  console.log(cart1.equals(cart2));
  console.log(cart1.equals(cart1));
  console.log(cart2.equals(cart2));
}

main();
