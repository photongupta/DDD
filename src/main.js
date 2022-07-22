const Product = require('./product');
const Cart = require('./cart');

function main() {
  const cart = new Cart();

  const headphone = new Product('Sony Wireless headphone');
  cart.addProduct(headphone);

  const applePencil = new Product('Apple Pencil');
  cart.addProduct(applePencil, 2);

  console.log('Cart = ' + cart);
  cart.removeProduct(applePencil);
  console.log('Cart = ' + cart);
  console.log('removedProduct = ' + cart.getRemovedProducts());
}

main();
