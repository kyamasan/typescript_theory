export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); //undefined

fooCompatible = barCompatible;

console.log(typeof fooCompatible); //string

let fooIncompatible: string;
let barIncompatible: number = 1;

//Type 'number' is not assignable to type 'string'.
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'Hanako');
