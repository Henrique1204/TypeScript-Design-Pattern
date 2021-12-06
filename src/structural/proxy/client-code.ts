import SystemUserProxy from './system-user/system-user-proxy';

(async (): Promise<void> => {
  const userProxy = new SystemUserProxy('Paulo', 'paulo@gmail.com');

  for (let i = 0; i < 5; i++) {
    console.log('\nTentativa:', i + 1);
    console.log(await userProxy.getAddress());
  }
})();
