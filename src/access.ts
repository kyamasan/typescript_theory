export {};

class Person {
  // public name: string;
  // private age: number;
  // protected nationality: string;
  // constructor(name: string, age: number, nationality: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.nationality = nationality;
  // }

  constructor(
    public name: string,
    private age: number,
    protected nationality: string
  ) {}
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name);
console.log(taro.profile());

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}
