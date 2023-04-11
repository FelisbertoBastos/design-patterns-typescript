import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode(): Promise<void> {
    const user = new SystemUserProxy('Luiz', 'luiz');
    console.log('Isso vai levar 2 segundos');
    console.log(await user.getAddresses());

    console.log(await user.getAddresses());
    console.log(await user.getAddresses());
}

clientCode();
