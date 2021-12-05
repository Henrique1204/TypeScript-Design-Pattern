import Vehicle from './vehicle';

class Car implements Vehicle {
  constructor(private name: string) {}

  public pickUp(customerName: string): void {
    console.log(customerName, ' está buscando o ', this.name);
  }

  public stop(): void {
    console.log(this.name, ' parou');
  }
}

export default Car;
