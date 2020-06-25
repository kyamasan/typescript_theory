export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;
  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  get owner() {
    return this._owner;
  }
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint(): string {
    return `_secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Taro', 1234567890);
// card.owner = 'Hanako' Cannot assign to 'owner' because it is a read-only property.
console.log(card.owner);

//Property '_secretNumber' is private and only accessible within class 'MyNumberCard'.ts
// console.log(card._secretNumber);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());

console.log(card.secretNumber); //undefinedとなり、参照できない。
