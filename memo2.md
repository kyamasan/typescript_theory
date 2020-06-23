## 関数で型を使う方法について

関数に対して、TypeScript の型がどう関わるのかを学習する。

### function

引数と戻り値さえ注意すれば、JavaScript と同じ。
引数と戻り値に対して、アノテーションを設定する。

```
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.78, 86));
```

### anonymous function

```
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};
```

### アロー関数

ES2015 で追加された表現

```
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};
```

アロー関数では一行返すだけなら、return を省略できる。

```
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);
```

### optional arguments

関数の引数名の末尾に?を書くことによって、その引数は省略可能な引数になる。

```
let bmi: (height: number, weight: number, isPrint?: boolean) => number = (
  height: number,
  weight: number,
  isPrint?: boolean
): number => {
  const bmi: number = weight / (height * height);

  if (isPrint) {
    console.log({ bmi });
  }
  return bmi;
};
```

引数が渡されない、もしくは undefined が渡された場合に、引数の後に＝で値を渡すことで、デフォルトのパラメータ値として設定することができる。

```
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
console.log(nextYearSalary(1000, undefined));
```

### rest parameters

関数の引数の数が不明な場合に、全ての引数を受け取る方法が rest parameter(...argument)

配列に用意されている reduce メソッドの引数に reducer を渡して合計値を計算する。
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

```
const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
```

### オーバーロード

引数や戻り値の型が異なる同名の関数を定義する事。
オーバーロードを使う際にはシグネチャ(関数の処理の実体は書かずに引数と戻り値の型のみ宣言する事)という宣言が必要になってくる。
実体の関数は一つしか書けないので、関数の実体は型制約を行わずに any 型で書く。(型安全はシグネチャで担保されているので、Union 型は使用しない)

```
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  // if (typeof value === 'number') {
  //   return value * 2;
  // } else if (typeof value === 'string') {
  //   return value + value;
  // } else {
  //   throw 'error';
  // }
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
```
