import ProductDecorator from './product-decorator';
import ProductProtocol from './product-protocol';

class ProductCustomizationDecorator extends ProductDecorator {
  constructor(protected product: ProductProtocol) {
    super(product);
  }

  public getName(): string {
    return this.product.getName() + ' Customizado';
  }

  public getPrice(): number {
    return this.product.getPrice() + 50;
  }
}

export default ProductCustomizationDecorator;
