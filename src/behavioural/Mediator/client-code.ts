import Buyer from './buyer';
import Mediator from './mediator';
import Seller from './seller';

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camisete', price: 40 });
seller1.addProduct({ id: '2', name: 'Bermuda', price: 20 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Caneta', price: 9 });
seller2.addProduct({ id: '4', name: 'Carro', price: 40000 });

mediator.addSeller(seller1, seller2);

mediator.showProducts();
console.log('\n');

const buyer = new Buyer(mediator);

buyer.viewProducts();
console.log('\n');

seller1.buy('2');
seller1.buy('4');
seller1.buy('4');

console.log('\n');
buyer.viewProducts();
