interface SmartHouseCommand {
  execute(): void;
  undo(): void;
}

export default SmartHouseCommand;
