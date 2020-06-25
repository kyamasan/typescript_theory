## クラスで型を使う方法について

クラスに対して、TypeScript の型がどう関わるのかを学習する。

### class

### コンストラクタメソッド

new 演算子でクラスのインスタンスを生成する際に、自動で呼び出されるメソッドの事。
new 演算子でインスタンスを作る際に、引数を渡すことができ、コンストラクタメソッドの引数となる。コンストラクタ内の this というのはインスタンス自体を指す。this.age = age;というのは、Person クラスのインスタンスの属性を設定している。
以下のようにして、引数、プロパティのそれぞれにアノテーションを設定できる。
また、コンストラクタは return しないので、TypeScript の言語仕様としてコンストラクタの戻り値に対する型は書かない。(void も書かない)

### メソッド

テンプレートストリングに名前と年齢を埋め込んで return する profile メソッドを追加。

```
class Person {
  name: string; //プロパティのアノテーションを設定
  age: number;
  constructor(name: string, age: number) { //引数のアノテーションを設定
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new Person('Taro', 30);
```

### アクセス修飾子

コンストラクタのプロパティにアクセス修飾子を付けることで、メンバの呼び出しを制限できる。(public は省略可能)
console.log(taro.age);で private を付けた age にアクセスしようとすると、以下のエラーが発生する。

> Property 'age' is private and only accessible within class 'Person'.

Person クラスの内部では参照できるので、profile()を介して age にアクセスすることは可能だが、インスタンスから直接アクセスするような処理は書けない、という事。

```
class Person {
  public name: string;
  private age: number;
  ...
}
let taro = new Person('Taro', 30);
console.log(taro.name);
//console.log(taro.age);
```

protected は派生クラスの内部からも参照可能。
(クラスの継承は extends で行う。)

派生クラスの中で super()を使えば、親クラスの同名メソッドの処理を呼び出すことができる。

```
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}
```

### コンストラクタの役割

メンバ変数(インスタンスの変数)の初期化

- 基本的な書き方

```
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

- 省略した書き方
  アクセス修飾子をコンストラクタの引数に書くと、自動で初期化処理までやってくれる。(知っていないと何もコンストラクタ内で処理を行っていないように見えるので注意)

```
class Person {
  constructor(public name: string, private age: number) {
  }
}
```

### getter,setter

owner(所有者)と secretNumber(マイナンバー)の 2 つのメンバ変数を持つ MyNumberCard クラスを用意する。

owner は初期化時に設定したら変更不可、参照可能(card.owner)としたい。
secretNumber は初期化時に設定した後も変更可能、参照不可としたい。

参照する為の get アクセサ、編集する為の set アクセサが存在する。

owner に private を付けてしまうと、参照できなくなってしまう。
クラスに参照する専用のメソッド(get というキーワードを伴うメソッド、一般的に getter と呼ばれる)を用意し、メソッドを参照できるようにするために get を付ける。
getter の名前とメンバ変数の名前が重複すると、以下のようなエラーが発生するので、慣習的にメンバ変数に\_を付けるようにする。

owner に private を付けてしまうと、編集できなくなってしまう。
クラスに編集する専用のメソッド(set というキーワードを伴うメソッド、一般的に setter と呼ばれる)を用意し、メソッドを参照できるようにするために set を付ける。

> Duplicate identifier 'owner'.

```
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
```

### readonly

クラスのプロパティを読み取り専用にする時に用いる。読み取り可能な変数なので、private でも protected でもないことから、public を省略することも可能。

class VisaCard {
public readonly owner: string;
constructor(owner: string) {
this.owner = owner;
}
}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);

### 静的メンバ

動的メンバとは、各インスタンスでユニークな値を持つ。静的メンバとは、各インスタンスに依存しない唯一の値を持つ。インスタンスを作らなくてもアクセス可能。
メンバ変数、メソッドの前に static を付ければ、静的メンバとなる。クラス名(Me).静的メンバで呼び出し可能。

ただ、Me.firstName という書き方だと、Me クラスに依存してしまうので、this.firstName と書くこともできる。

```
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Yamada';

  static work(): string {
    //return `Hi ${Me.firstName}`;
    //return `Hi ${this.firstName}`;
  }
}
```

### 名前空間

同一名称のクラスは同じ名前空間には複数存在できないので、それぞれの Person クラスを Japanese と English の名前空間に分けて記述する。
しかし、const me = new Japanese.Person('Taro');のような書き方をしてもエラーが発生するので、class の直前に export と記載する必要がある。

```
namespace Japanese {
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}
//Property 'Person' does not exist on type 'typeof Japanese'.
//const me = new Japanese.Person('Taro');
console.log(me.name);
```

Japanese 名前空間の中に、さらに Tokyo 名前空間を作成したい場合は namespace の前に export を付ければ良い。

```
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
```

### 継承

親クラスのコンストラクタやメソッドを呼び出す際には、super()、super.メソッド名(run())を用いる。

```
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
```

```
class Lion extends Animal {
  constructor(public name: string, public speed: number) {
    super();
  }
  ...
}
```

上記のようにも書けるが、super()の処理が親と子で 2 回呼び出されているのは分かりづらいので、あえてコンストラクタ引数の初期化を明示的に行っている。

### 抽象メソッド

処理の実体がなく、必ずオーバーライドする必要があるメソッド。抽象メソッドの宣言の事をシグネチャと呼ぶ。
抽象メソッドは抽象クラスの内部で宣言してあげなければならない。
抽象メソッドが増えても実装を忘れたらコンパイラでエラーになるので実装ミスを防ぐことができ便利。

```
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
```

### インターフェース

TypeScript は言語仕様として複数のクラスを継承すること(多重継承)は許可されていない。
複数箇所に分散している機能を集めて一つに統合するにはインターフェースを使用する。(複数のインターフェースを実装することは許可されている。)
インターフェースの場合は継承ではなく実装と呼び、この時 extends ではなく implements と書く。
この時、interface で宣言されたシグネチャの処理を書かないと、コンパイラでエラーが発生するので、実装忘れがなくなる。

```
class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  //処理の実態がないメソッドの宣言＝シグネチャ
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}
class Jiro implements Kenja, Senshi {}
```
