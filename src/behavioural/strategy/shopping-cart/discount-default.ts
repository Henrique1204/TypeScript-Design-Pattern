import DiscountStrategy from './discount-strategy';
import ECommerceShoppingCart from './e-commerceshoppingcart';

class DiscountDefault extends DiscountStrategy {
  constructor() {
    super();
  }

  public getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotal();

    if (total > 100 && total < 200) this.discount = 10;
    else if (total > 200 && total < 300) this.discount = 20;
    else if (total >= 300) this.discount = 30;

    return total - total * (this.discount / 100);
  }
}

export default DiscountDefault;
