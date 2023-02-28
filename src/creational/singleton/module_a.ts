import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Felisberto', age: 22 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });

export { myDatabaseClassic };
