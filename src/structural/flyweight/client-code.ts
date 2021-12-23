import deliveryContext from './delivery/delivery-context';
import DeliveryFactory from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Paulo', '107', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Henrique', '107', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Silva', '208', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Souza', '309', 'Av. Portugal', 'SP');

console.log('\n', factory.getLocations());
