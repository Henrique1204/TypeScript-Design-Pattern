import Customer from './customer';

class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (INDIVIDUAL)';
  }
}

export default IndividualCustomer;
