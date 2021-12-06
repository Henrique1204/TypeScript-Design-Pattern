import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}

  public async getAddress(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 15 },
          { street: 'Av. Portugal', number: 18 },
        ]);
      }, 2000);
    });
  }
}

export default AdminUser;
