import ConcreteMemento from './concrete-memento';
import Memento from './memento';

export type FileFormats = 'png' | 'jpg' | 'jpeg' | 'gif';

class ImageEditor {
  constructor(private filePath: string, private fileFormat: FileFormats) {}

  public convertFormatTo(newFormat: FileFormats): void {
    this.fileFormat = newFormat;

    this.filePath = this.filePath.split('.').slice(0, -1).join('.');
    this.filePath += '.' + this.fileFormat;
  }

  public save(): Readonly<Memento> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat
    );
  }

  public restore(memento: Memento): void {
    const concreteMemento = memento as ConcreteMemento;

    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}

export default ImageEditor;
