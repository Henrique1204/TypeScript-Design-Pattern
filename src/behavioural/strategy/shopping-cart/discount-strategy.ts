import ECommerceShoppingCart from './e-commerceshoppingcart';

class DiscountStrategy {
  protected discount = 0;

  public getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotal();
  }
}

export default DiscountStrategy;
