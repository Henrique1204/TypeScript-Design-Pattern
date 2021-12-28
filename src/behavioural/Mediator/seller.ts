import Mediator from './mediator';
import SellerProduct from './seller-product';

class Seller {
  private products: SellerProduct[] = [];
  private mediator?: Mediator;

  public showProducts(): void {
    this.products.forEach((product) =>
      console.log(product.id, product.name, product.price)
    );
  }

  public addProduct(...products: SellerProduct[]): void {
    products.forEach((product) => this.products.push(product));
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  public sell(id: string): SellerProduct | null {
    const productIndex = this.products.findIndex((item) => item.id === id);

    if (productIndex === -1) return null;

    const [product] = this.products.splice(productIndex, 1);

    return product;
  }

  public viewProducts(): void {
    this.mediator?.showProducts();
  }

  public buy(id: string): void {
    this.mediator?.buy(id);
  }
}

export default Seller;
