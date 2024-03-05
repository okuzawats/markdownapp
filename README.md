# Markdown App

[React × TypeScript で手を動かながら学ぶ！モダンなフロントエンド開発入門](https://www.techpit.jp/courses/111)で作るMarkdownアプリです。

* [URL](https://okuzawats.github.io/markdownapp/)

## 環境構築

```console
$ node -v
v20.2.0
$ npm -v
9.7.2
```

```console
$ npm i webpack@5 webpack-cli@4
$ npm i typescript@4 ts-loader@9
$ npm i react@17 react-dom@17 @types/react@17 @types/react-dom@17
$ npm i react-router-dom@5 @types/react-router-dom@5
$ npm i styled-components@5 @types/styled-components@5
$ npm i react-markdown@6
$ npm i dexie@3
$ npm i worker-loader@3
```

開発用

```console
$ npm i webpack-dev-server@3
```

## ビルド

```console
$ npm run build
```
`./dist/index.js` にファイルが出力される。

デバッグ用実行は以下のコマンド。`webpack-dev-server` により、ローカル環境で実行される。

```console
$ npm start
```
