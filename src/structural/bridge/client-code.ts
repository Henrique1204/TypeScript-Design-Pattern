import RemoteControl from './remote-control/remote-control';
import RemoteControlWithVolume from './remote-control/remote-control-with-volume';

import Tv from './device/tv';
import Radio from './device/radio';

const clientCode = (
  abstraction: RemoteControl | RemoteControlWithVolume
): void => {
  abstraction.togglePower(); // true

  // Type Guard pra saber se existe o método dentro do objeto abstraction.
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
};

const tv = new Tv();
const radio = new Radio();

const remoteTv = new RemoteControlWithVolume(tv);
clientCode(remoteTv);

const remoteRadio = new RemoteControl(radio);
clientCode(remoteRadio);
