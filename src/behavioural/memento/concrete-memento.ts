import { FileFormats } from './image-editor';
import Memento from './memento';

class ConcreteMemento implements Memento {
  constructor(
    private name: string,
    private date: Date,
    private filePath: string,
    private fileFormat: FileFormats
  ) {}

  public getName(): string {
    return this.name;
  }

  public getDate(): Date {
    return this.date;
  }

  public getFilePath(): string {
    return this.filePath;
  }

  public getFileFormat(): FileFormats {
    return this.fileFormat;
  }
}

export default ConcreteMemento;
