import SmartHouseCommand from './smart-house-command';

class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  constructor() {}

  public addCommand(key: string, command: SmartHouseCommand): void {
    this.commands[key] = command;
  }

  public executeCommand(key: string): void {
    this.commands[key]?.execute();
  }

  public undoCommand(key: string): void {
    this.commands[key]?.undo();
  }
}

export default SmartHouseApp;
