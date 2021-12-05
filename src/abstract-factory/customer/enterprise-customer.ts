import Customer from './customer';

class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)';
  }
}

export default EnterpriseCustomer;
