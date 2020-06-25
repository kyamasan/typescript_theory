export {};

class Animal {
  constructor(public name: string) {}
  run(): String {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km`;
  }
}

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
