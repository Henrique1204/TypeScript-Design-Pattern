import Seller from './seller';
import SellerProduct from './seller-product';

class Mediator {
  private sellers: Seller[] = [];

  public addSeller(...sellers: Seller[]): void {
    sellers.forEach((seller) => {
      seller.setMediator(this);
      this.sellers.push(seller);
    });
  }

  public buy(id: string): SellerProduct | null {
    for (let i = 0; i < this.sellers.length; i++) {
      const product = this.sellers[i].sell(id);

      if (product) {
        console.log('Aqui está', product.id, product.name, product.price);
        return product;
      }
    }

    console.log('Não encontramos nenhum produto com id:', id);
    return null;
  }

  public showProducts(): void {
    this.sellers.forEach((seller) => seller.showProducts());
  }
}

export default Mediator;
