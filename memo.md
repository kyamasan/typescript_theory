### TypeScript の特徴

typescript 公式の github
https://github.com/microsoft/TypeScript

> TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

TypeScript が Javacsript を包含することを意味している。
Javascript で書けるコードは全て TypeScript で書き直せる。

### 環境構築

> git checkout -b ~

~ブランチの作成とチェックアウトを同時に行ってくれる。

> git branch --contains=HEAD

現在のブランチを確認

> git add .

> git reset HEAD/git reset HEAD file_name

誤って add した場合にはこのコマンド

> git status

git add した内容の確認

> git commit -m "~"

> git push -u origin HEAD

> git

u オプションを指定すると、push 先のリモートブランチが、push 成功時に上流ブランチとして設定される。
上流ブランチを設定することで、git push、git pull のときにレポジトリ、ブランチの引数を省略できる。

> npm init -y

package.json の作成(-y を付けると yesno の問い合わせがなくなる。)

### TypeScript のインストール

npm info typescript
現時点での TypeScript パッケージの最新状態を確認する。

> typescript@3.9.5

npm install --save-dev typescript@3.7.5
--save-dev は、開発に必要だが、リリースにはいらないという意味。npm install -g がグローバルインストールなのに対し、npm install --save-dev はローカルインストールと呼ばれる。

ローカルインストールでは devDependencies に情報が追加される。
"devDependencies": {
"typescript": "^3.7.5"
}

@3.7.5 でバージョンを指定してインストールできる。

### Javascipt への変換方法

```typescript
let message: string = 'Hello, TypeScript!';
console.log({ message });
```

typescript を導入したことで tsc コマンド(コンパイルを行う為のコマンド)が使えるようになった。

しかし、ローカルインストールを行った為に、tsc コマンドを実行できる箇所は限られている。

> .\node_modules\.bin\tsc

が tsc の実体なので、コマンドでもこのパスを指定する必要がある。

> .\node_modules\.bin\tsc src/install-typescript.ts

これで、コンパイルが完了。

- tips npx コマンドを使用すれば、node-modules 配下を検索して自動で実行してくれる。

> npm tsc src/install-typescript.ts

### ts-node

https://github.com/TypeStrong/ts-node

tsc コマンドで.ts ファイルを.js ファイルに変換し、それを node で実行するまでを 1 コマンドで実行できる。

> npm info ts-node

> npm install --save-dev ts-node@8.6.2

> npx ts-node src/install-typescript.ts

### ts-node のバージョンが 8.6.0 以上だと、ts-node-dev でエラーが表示されない不具合

ts-node のバージョン一覧を確認

> npm info ts-node versions

8.6.2 をアンインストール

> npm uninstall --save-dev ts-node

8.5.4 を再度インストール

> npm install --save-dev ts-node@8.5.4

### ts-node-dev

https://github.com/whitecolor/ts-node-dev

> Compiles your TS app and restarts when files are modified.

.ts ファイルを変更するたびに自動でコンパイルしてくれる機能

> npm info ts-node-dev

> npm install --save-dev ts-node-dev@1.0.0-pre.44

> npx ts-node-dev --respawn src/install-typescript.ts

--respawn ファイルの変更を検知してコンパイルを行うオプション

(未使用)
--transpileOnly コンパイルのみ行い、実行は行わないようにするオプション

### psckage.json のタスクに登録する

npx ts-node-dev...のようなコマンドは、度々使用する為、あらかじめタスクに登録しておく。

```
"scripts": {
    "dev": "ts-node-dev --respawn",
    ...
},
```

登録したタスクは、npm run ~ で使用できる。

> npm run dev src\install-typescript.ts

### vscode 設定

- インデント幅の設定

> setting(Ctrl+,)で「tab size」

- フォーマット設定

> setting(Ctrl+,)で「settings json」を検索し、edit in settings.json をクリック

- Prettier

> 自動でコード整形してくれるコードフォーマッター

- settings.json のおすすめ設定

```
"editor.formatOnSave": true,
"prettier.semi": true,
"prettier.singleQuote": true
```

- markdown ファイルのプレビュー

> Ctrl + Shift + V

### tsc 実行時設定(tsconfig.json の作成)

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

> npx tsc --init

### vscode と package.json の typescript バージョンを一致させる

.ts ファイルを開いた状態で vscode の右下に typescript のバージョンが表示されるのでクリック。
上に Select TyppeScript Version と表示されるので、クリック。
さらに Use WorkSpace Version と表示されるので、(これが package.json のバージョン)クリックすると、両方のバージョンが一致する。

.vscode フォルダの settings.json が生成されるので、以降の設定は不要。

```
{
  "typescript.tsdk": "node_modules\\typescript\\lib"
}
```

### echo コマンドで.ts ファイルを作成

> echo 'export {};' > src/boolern.ts

### 型

変数に対して、: 型名で型を指定することができる。これをアノテーションと呼ぶ。

- boolean

```
let isFinished: boolean = true;
isFinished = false;
//isFinished = 1;
console.log({ isFinished });
```

- number

- string

- array

```
let numbers: number[] = [1, 2, 3]
let numbers: Array<number> = [1, 2, 3] ※非推奨
let nijigenHairetu: number[][] = [
  [50, 150],
  [250, 350]
]
let hairetu: (string | number | boolean)[] = [1, false, 'Japan']
```

- tuple
  配列で要素の型が分かっている(同一ではない)
  共用型は、配列要素の順序までは指定できない。さらに制約を強くしたい場合は Tuple 型が有効。

```
//Union Types(共用型)
let profile: (string | number)[] = ['Ham', 43]

//Tuple型
let profile: [string, number] = ['Ham', 43]

```

- any
  型が不定な変数を扱う場合に使用する。

https://udemy-utils.herokuapp.com/api/v1/articles?token=token123

axios で上記 API にアクセスする。
https://github.com/axios/axios

> npm info axios

> npm install axios@0.19.2

https://github.com/axios/axios#response-schema

API サーバから帰ってくるデータ(response.data)の型を TypeScript は推測できないので、any 型となる。
interface を使用することで、any 型を使わずに型指定することが可能。
どうしても型指定ができないような場合を除き、基本的に TypeScript で any 型を使用することは避けた方がいい。

[
{
id: 1,
title: 'Title for article #1!',
description: 'Description for article #1.'
},
...
]

```
let data: any = response.data;
↓
interface Article {
  id: number;
  title: string;
  description: string;
}
let data: Article[] = response.data;
```

- void
  何もデータが存在しない時に使用

```
//undefinedを書く場合、returnをしなければならない。
function returnNothing(): undefined {
  return;
}

//returnがないメソッドを書く場合は、voidを型指定する必要がある。
function returnNothing(): void {

}
```

- null, undefined

- never
  必ず例外が起きる型。呼び出し元に戻ってこない(never)唯一の型。
  void 型は呼び出し元には値は返さないが戻ってくる。

```
function error(message: string): never {
  throw new Error(message);
}

try {
  error('test');
} catch (error) {
  console.log({ error });
}
```

- object
  {}で囲まれたデータなら何でも格納できる。(絞り込みが甘い)
  絞り込みを強化するには、object でなく{}を使い、プロパティに対して型指定を行う。

```
let profile1: object = { name: 'Ham' }; //絞り込みが甘い
let profile1: {} = { name: 'Ham' }; //絞り込みが甘い

let profile2: {
  name: string;
} = { name: 'Ham' }; //絞り込みが強い
```

### alias

string 型の alias を作る場合

```
const example1 = {
  name: 'Ham',
  age: 43,
};

//type の後に書く別名は必ず大文字にして、右辺に別名を付けたい型を指定する。
//複雑な型にも別名(Profile)を付けることで見た目をシンプルにすることができる。
//しかし、example1の型を書き写す際にミスが発生し得る事、example1を変更した際に追従できない点がこの書き方のデメリット。
type Profile = {
  name: string;
  age: number;
};
↓
//この書き方の方がミスが起きにくい&変化に追従できるのでベター
//example1のデータ型をProfile2として別名を付ける
type Profile2 = typeof example1;

const example2: Profile2 = {
  name: 'Ham',
  age: 43,
};
```

### interface

```
type ObjectType = {
  name: string;
  age: number;
};

// typeと違って別名を付けるわけではないので、
// インターフェース単独で名前を付けることができる(その為、＝は不要)
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham',
  age: 43,
};
```

### 型安全の利点

TypeScript のコンパイラによって、不正な型を代入することによるエラーを実行前に検知できる。
Javascript にはコンパイルという工程も、型チェックという概念もないし、実行時エラーもない。
型安全を確保する仕組みを導入し、型安全を確保することが、TypeScript を導入する最大のモチベーション。

### unknown 型、タイプガード

型安全な any 型

any 型の変数には足し算を行ったりすることが可能。もし any 型の変数に number 型以外の値が入ってきたら、
Javascript 実行時にエラーになってしまう。(実行するまで分からないので危険)
any ではなく、UnKnown 型を指定することで不正な計算がそのまま行われることを防ぎ、
typeof を使って確実に計算ができる状況を担保することができる。
この、typeof を使って特定の型であることを確認しながらコードを安全に実行することをタイプガード、と呼ぶ。

```
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// let sumUnknown = numberUnknown + 10; エラー
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
```

### intersection 型(交差型)

既存の型を活かしつつ、新たな型を合理的に作っていく方法。
Batter1 には throwingSpeed という属性を持たせることはできないので、新たな型を定義する必要がある。
その際、一から型を設定するのではなく、intersection 型を用いれば、よりスマートに新たな型を再定義できる。

```
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Tanaka: Pitcher1 = {
  throwingSpeed: 154,
};

const ichiro: Batter1 = {
  // throwingSpeed: 140
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.331,
};
```

### Union 型(共用体型)

変数 value に数値と文字列を格納したい。しかし、一度数値を代入すると、文字列型の格納は出来なくなる。
Union 型を用いることで、複数の型を代入することができる。

```
let value = 1;
//value = 'foo'; エラー!

let value: number | string = 1;
```

### Literal 型

プリミティブ型よりも細かい指定が可能。
文字列、数値、真偽値の 3 つの Literal 型が存在する。(真偽値の Literal 型はほぼ使わないが)

```
let dayOfTheWeek: string = '日';

dayOfTheWeek = '月';
dayOfTheWeek = '31'; //不正な曜日データが設定されたらエラーとしたい。stringでは絞り込みが甘すぎる。

//Literal 型と Union 型を組み合わせることで、変数に入れる値を制限できる。数値、真偽値型も同様。
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
```

### enum 型(列挙型)

数値の列挙型
January は 1、February は 2、のように順に番号を割りつけたい場合、TypeScript の enum 型では以下のように文字列を列挙するだけで連番で番号が割り振られる。
enum の変数は複数形にするのがお作法。

```
enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}
console.log(Months.September); → 8

//JavaScriptで書く場合、valueを明示的に渡さないといけないので、ミスが起こりやすい

const MonthsJs = {
  January: 0,
  February: 1,
  ...
};
```

割り振られる番号を 0 ではなく 1 始まりにしたい場合は、先頭の要素に=1 を書けばよいだけ。

```
enum Months {
  January = 1,
  February,
  ...
}
console.log(Months.September); → 9
```

文字列の列挙型
文字列の列挙型は必ず＝で初期化する必要がある。
存在しない要素にアクセスすると Javascript とは異なりエラーになる。

```
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}

COLORS.YELLOW; エラー！

enum COLORS {
  YELLOW = '#FFFF00',
}
COLORS.YELLOW; アクセス可能
```
