## 型の互換性について

ある型の変数 foo に対して、別の型の変数 bar に代入できる時、foo と bar は互換性がある、という。
型の互換性はコンパイラによって常にチェックされている。

```
interface Animal {
  age: number;
}

class Person {
  constructor(public age: number) {}
}

let me: Animal;
me = new Person(43);
```

Animal 型の interface と、Animal とは無関係の Person クラスにはなぜか互換性がある。
あるオブジェクトが、別のオブジェクトに代入できるかどうかの判定にオブジェクトの型は関係ない。
代入される側の Animal 型のオブジェクトが内部で持つメンバが、代入する側の Person 型のオブジェクトにも存在し、メンバの型に互換性があるかを見ている。(構造的部分型と呼ぶ)

Animal にプロパティを追加すると、互換性が失われる。

```
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number) {}
}

let me: Animal;

//Property 'name' is missing in type 'Person' but required in type 'Animal'.
//me = new Person(43);
```

### ジェネリクス

汎用的なクラス、メソッドに対して、特定の型を紐づける為の仕組みのことをジェネリクスと呼ぶ。
型が異なるだけで処理は同じ関数を共通化する為の機能。

```
const echo = (arg: number): number => {
  return arg;
};

const echo = (arg: string): string => {
  return arg;
};
```

string、number などの型を T に置換し、引数の前にも<T>を付ける。
<T>はジェネリクスの宣言で、T が型引数と呼ばれ抽象的な型を意味している。

```
const echo = <T>(arg: T): T => {
  return arg;
};
```

ジェネリクスクラスも以下のように作成できる。

```
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello!').echo());
console.log(new Mirror<boolean>(true).echo());
```

### 型アサーション

あるデータの型を互換性がある場合に限って、制約を付ける方法の事。
以下のように name.length は数値型が入るべきところを、name が any 型であるが故に、型推論では name.length も any 型にしか判定してくれない。その為、文字列型での上書きができてしまう。
こういった型推論は役に立たないので、アサーションを用いて制約を付けていく。

```
let name: any = 'Ham';

let length = name.length;
length = 'foo';
```

name.length が number 型であることは自明なので、as number とつけることで、length に入る値の型を制限できる。

```
let length = name.length as number;
length = 'foo';
```

name に as string をつけて、length を number 型と判定することもできる。

```
let length = (name as string).length;
length = 'foo';
```

name に <string> をつけて、length を number 型と判定することもできる。(react の jsx と似た書き方の為、非推奨)

```
let length = (<string>name).length;
length = 'foo';
```

### const アサーション

データの値の書き換えを行わないことを明示的に示す。

name は、'Taro'という文字列リテラル型になるので、実質的に再代入が不可能となる。
オブジェクトにも as const を付けると、全てのプロパティに readonly 属性がつく。

```
let name = 'Taro' as const;

let profile = {
  name: 'Taro',
  height: 178,
} as const;
```

### Nullable Types

tsconfig.json の中に、strictNullChecks の値が true になっていると、null を代入することはできない。

> "strictNullChecks": false /_ Enable strict null checks. _/,

設定を false にすると、値の管理が非常に困難になる為、負荷。
null の代入を許可するには、Union 型を用いる。

```
let profile: { name: string; age: number | null } = {
  name: 'Taro',
  age: null,
};
```

### インデックスシグネチャ

オブジェクトに対して、新しいプロパティを都度追加していけるようにする方法。
[ index: typeForIndex ]: typeForValue と書くことで実装可能。
インデックスシグネチャの value の型は、クラス内の全てぼプロパティと互換性がある必要がある。

```
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Taro', underTwenty: false };

profile.age = 43;
profile.nationality = 'Japan';
```
