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
