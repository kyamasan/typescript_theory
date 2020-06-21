### TypeScript の特徴

typescript 公式の github
https://github.com/microsoft/TypeScript

> TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

TypeScript が Javacsript を包含することを意味している。
Javascript で書けるコードは全て TypeScript で書き直せる。

### 環境構築

> git checkout -b ~

~ブランチの作成とチェックアウトを同時に行ってくれる。

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
