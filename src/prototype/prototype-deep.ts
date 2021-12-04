interface Prototype {
  clone(): Prototype;
}

class Address implements Prototype {
  constructor(public street: string, public number: string) {}

  public clone(): Address {
    return new Address(this.street, this.number);
  }
}

class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  public addAddress(address: Address): void {
    this.addresses.push(address);
  }

  public clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map((address) => address.clone());

    return newObj;
  }
}

const person1 = new Person('Paulo', 20);

const address1 = new Address('Av. Brasil', '15');
person1.addAddress(address1);

const person2 = person1.clone();
// person2.addresses[0].street = 'Av. Portugal';

person2.name = 'Henrique';

person1.addresses[0].street = 'Av. Portugal';

console.log(person1.addresses);
console.log(person2.addresses);

export default Person;
