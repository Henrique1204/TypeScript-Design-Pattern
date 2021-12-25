import DiscountStrategy from './discount-strategy';
import ECommerceShoppingCart from './e-commerceshoppingcart';

class DiscountNew extends DiscountStrategy {
  constructor() {
    super();
  }

  public getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 150) this.discount = 5;

    return total - total * (this.discount / 100);
  }
}

export default DiscountNew;
