import Vehicle from './vehicle';
import Customer from '../customer/customer';

class EnterpriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  public pickUp(): void {
    console.log(this.customer.name, 'está buscando', this.name, '(ENTERPRISE)');
  }
}

export default EnterpriseCar;
