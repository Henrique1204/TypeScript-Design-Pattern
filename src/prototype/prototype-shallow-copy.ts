interface Prototype {
  clone(): Prototype;
}

class Address {
  constructor(public street: string, public number: string) {}
}

class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  public addAddress(address: Address): void {
    this.addresses.push(address);
  }

  public clone(): this {
    const newObj = Object.create(this);

    return newObj;
  }
}

const person1 = new Person('Paulo', 20);

const address1 = new Address('Av. Brasil', '15');
person1.addAddress(address1);

console.log(person1);
person1.addresses[0].street = 'Av. Portugal';

const person2 = person1.clone();

person2.name = 'Henrique';
console.log(person2.addresses);

export default Person;
