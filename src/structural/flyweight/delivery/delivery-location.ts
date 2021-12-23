import DeliveryFliweight from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

class DeliveryLocation implements DeliveryFliweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  public delivery(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.intrinsicState.city, this.intrinsicState.street);
    console.log('Número:', number);
    console.log('###\n');
  }
}

export default DeliveryLocation;
