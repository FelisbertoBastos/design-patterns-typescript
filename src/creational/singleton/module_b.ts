import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Roberto', age: 22 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
