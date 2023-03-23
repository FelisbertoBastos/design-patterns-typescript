export interface Prototype {
    clone(): Prototype;
}

class Address {
    constructor(public street: string, public number: number) {}
}

class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): this {
        const newObj = Object.create(this);

        return newObj;
    }

    addAddresses(address: Address): void {
        this.addresses.push(address);
    }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Luiz', 30);
person1.addAddresses(address1);

const person2 = person1.clone();
person2.name = 'Joana';

console.log(person2);
console.log(person2.addresses);
