const Product = require('./product');
const Cart = require('./cart');

function main() {
  const cart = new Cart();
  const product = new Product('book');
  cart.addProduct(product);

  console.log('Cart = ' + cart);

  const products = cart.getProducts();

  console.log('----------------------------------------');
  console.log('products = ' + products);
  console.log('----------------------------------------');
}

main();
