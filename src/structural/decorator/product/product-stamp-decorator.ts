import ProductDecorator from './product-decorator';
import ProductProtocol from './product-protocol';

class ProductStampDecorator extends ProductDecorator {
  constructor(protected product: ProductProtocol) {
    super(product);
  }

  public getName(): string {
    return this.product.getName() + ' Estampada';
  }

  public getPrice(): number {
    return this.product.getPrice() + 10;
  }
}

export default ProductStampDecorator;
