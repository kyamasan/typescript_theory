export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'GAOO';
  }
}

//Non-abstract class 'Tiger' does not implement inherited abstract member 'cry' from class 'Animal'.
// class Tiger extends Animal {}
