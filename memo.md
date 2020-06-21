### TypeScriptの特徴
typescript公式のgithub
https://github.com/microsoft/TypeScript

> TypeScript is a superset of JavaScript that compiles to clean JavaScript output. 

TypeScriptがJavacsriptを包含することを意味している。
Javascriptで書けるコードは全てTypeScriptで書き直せる。

### 環境構築
git checkout -b ~
~ブランチの作成とチェックアウトを同時に行ってくれる。

git add .

(git status)

git commit -m "~"

git push -u origin HEAD
push 先のリモートブランチが、push 成功時に上流ブランチとして設定される。
上流ブランチを設定することで、git push、git pull  のときにレポジトリ、ブランチの引数を省略できる。

npm init -y
package.jsonの作成(-yを付けるとyesnoの問い合わせがなくなる。)

### TypeScriptのインストール

npm info typescript
現時点でのTypeScriptパッケージの最新状態を確認する。
>typescript@3.9.5

npm install --save-dev typescript@3.7.5
--save-devは、開発に必要だが、リリースにはいらないという意味。npm install -gがグローバルインストールなのに対し、npm install --save-devはローカルインストールと呼ばれる。

ローカルインストールではdevDependenciesに情報が追加される。
"devDependencies": {
"typescript": "^3.7.5"
}

@3.7.5でバージョンを指定してインストールできる。

### Javasciptへの変換方法

```typescript
let message: string = 'Hello, TypeScript!'
console.log({message})
```

typescriptを導入したことでtscコマンド(コンパイルを行う為のコマンド)が使えるようになった。

しかし、ローカルインストールを行った為に、tscコマンドを実行できる箇所は限られている。

>.\node_modules\.bin\tsc

がtscの実体なので、コマンドでもこのパスを指定する必要がある。

>.\node_modules\.bin\tsc src/install-typescript.ts

これで、コンパイルが完了。

- tips npxコマンドを使用すれば、node-modules配下を検索して自動で実行してくれる。

>npm tsc src/install-typescript.ts