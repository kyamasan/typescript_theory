export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Yamada';

  static work(): string {
    return `Hi ${this.firstName}`;
  }
}

// let me = new Me();

//Property 'isProgrammer' is a static member of type 'Me'
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
