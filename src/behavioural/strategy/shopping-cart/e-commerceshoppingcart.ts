import DiscountStrategy from './discount-strategy';
import ECommerceProductProtocol from './e-commerce-product-protocol';

class ECommerceShoppingCart {
  private products: ECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  public addProduct(...products: ECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  set discountStrategy(strategy: DiscountStrategy) {
    this._discountStrategy = strategy;
  }

  public getProducts(): ECommerceProductProtocol[] {
    return this.products;
  }

  public getTotal(): number {
    return this.products.reduce((acc, { price }) => acc + price, 0);
  }

  public getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }
}

export default ECommerceShoppingCart;
