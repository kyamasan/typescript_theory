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
