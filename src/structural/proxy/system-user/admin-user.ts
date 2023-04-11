import {
    SystemUserAddressProtocol,
    SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
    constructor(public firstName: string, public userName: string) {}

    async getAddresses(): Promise<SystemUserAddressProtocol[]> {
        return new Promise((resolve) => {
            return setTimeout(
                () =>
                    resolve([
                        { street: 'Av. Brasil', number: 50 },
                        { street: 'Rua A', number: 40 },
                    ]),
                2000,
            );
        });
    }
}
