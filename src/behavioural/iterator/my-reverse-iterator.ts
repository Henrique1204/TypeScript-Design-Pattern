import MyDataStructure from './my-data-structure';
import MyIteratorProtocol from './my-iterator-protocol';

class MyReverseIterator implements MyIteratorProtocol<string> {
  constructor(
    private readonly dataStructure: MyDataStructure,
    private index = dataStructure.size()
  ) {}

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false };
  }

  public next(): IteratorResult<string> {
    this.index--;

    const returnValue = this.makeValue(this.dataStructure.items[this.index]);
    returnValue.done = this.index < 0;

    return returnValue;
  }

  public reset(): void {
    this.index = this.dataStructure.size();
  }
}

export default MyReverseIterator;
