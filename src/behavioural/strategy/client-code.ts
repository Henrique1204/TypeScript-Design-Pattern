import DiscountDefault from './shopping-cart/discount-default';
import DiscountNew from './shopping-cart/discount-new';
import ECommerceShoppingCart from './shopping-cart/e-commerceshoppingcart';

const shoppingCart = new ECommerceShoppingCart();

shoppingCart.addProduct(
  { name: 'Produto 1', price: 50 },
  { name: 'Produto 2', price: 50 },
  { name: 'Produto 3', price: 50 }
);

console.log(shoppingCart.getTotalWithDiscount());

shoppingCart.discountStrategy = new DiscountDefault();
console.log(shoppingCart.getTotalWithDiscount());

shoppingCart.discountStrategy = new DiscountNew();
console.log(shoppingCart.getTotalWithDiscount());
