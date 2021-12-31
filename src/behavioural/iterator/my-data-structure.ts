import MyDefaultIterator from './my-default-iterator';
import MyIteratorProtocol from './my-iterator-protocol';

class MyDataStructure {
  private _items: string[] = [];
  private iterator: MyIteratorProtocol<string> = new MyDefaultIterator(this);

  get items(): string[] {
    return this._items;
  }

  public addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  public size(): number {
    return this.items.length;
  }

  public chengeIterator(iterator: MyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  public resetIterator(): void {
    this.iterator.reset();
  }

  [Symbol.iterator](): MyIteratorProtocol<string> {
    // Caso queira que o reset seja feito automático.
    // this.iterator.reset();

    // Outra solução seria
    // return new Iterator();

    return this.iterator;
  }
}

export default MyDataStructure;
