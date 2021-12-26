import LightIntensityCommand from './light-intensity-command';
import LightPowerCommand from './light-power-command';
import SmartHouseApp from './smart-house-app';
import SmartHouseLight from './smart-house-light';

// Receiver - Quem recebe o comando.
const bedroomLight = new SmartHouseLight('Luz do quarto');
const bathroomLight = new SmartHouseLight('Luz do banheiro');

// Command - Ação que deve ser executada.
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

// Invoker - Quem executa a ação.
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

console.log('\n\n');

smartHouseApp.addCommand('btn-2', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

console.log('\n\n');

smartHouseApp.addCommand('btn-3', bathroomLightPowerCommand);

smartHouseApp.executeCommand('btn-3');
smartHouseApp.undoCommand('btn-3');
