import Vehicle from './vehicle';
import Customer from '../customer/customer';

class IndividualCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  public pickUp(): void {
    console.log(this.customer.name, 'está buscando', this.name, '(INDIVIDUAL)');
  }
}

export default IndividualCar;
