import ProductProtocol from './product-protocol';

class ProductDecorator implements ProductProtocol {
  constructor(protected product: ProductProtocol) {}

  public getName(): string {
    return this.product.getName();
  }

  public getPrice(): number {
    return this.product.getPrice();
  }
}

export default ProductDecorator;
