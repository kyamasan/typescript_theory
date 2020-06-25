export {};

class VisaCard {
  public readonly owner: string;
  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);

//Cannot assign to 'owner' because it is a read-only property.
// myVisaCard.owner = 'Hanako';
