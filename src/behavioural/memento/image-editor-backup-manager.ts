import ImageEditor from './image-editor';
import Memento from './memento';

class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  public backup(): void {
    console.log('Backup: salvando o estado de ImageEditor');
    this.mementos.push(this.imageEditor.save());
  }

  public undo(): void {
    const memento = this.mementos.pop();

    if (!memento) return console.log('Backup: não existe backup');

    this.imageEditor.restore(memento);
    console.log('Backup:', memento.getName(), 'foi restaurado com sucesso.');
  }

  public showMementos(): void {
    for (const memento of this.mementos) {
      console.log('\n', memento);
    }
  }
}

export default ImageEditorBackupManager;
