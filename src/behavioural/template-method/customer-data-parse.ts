import CustomerData from './customer-data';

abstract class CustomerDataParser {
  public customerData: CustomerData[] = [];

  constructor(protected filePath: string) {}

  public readonly fixCustomerData = async (): Promise<void> => {
    this.customerData = await this.parseData();
    this.customerData = this.fixCpf();
  };

  private fixCpf(): CustomerData[] {
    return this.customerData.map((customer) => ({
      ...customer,
      cpf: customer.cpf.replace(/[.-]/g, ''),
    }));
  }

  protected abstract parseData(): Promise<CustomerData[]>;
}

export default CustomerDataParser;
