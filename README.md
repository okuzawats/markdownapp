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
$ npm i npm i react@17 react-dom@17 @types/react@17 @types/react-dom@17
```

## ビルド

```console
$ npm run build
```
`./dist/index.js` にファイルが出力される。

デバッグ用実行は以下のコマンド。

```console
$ node ./dist/index.js
```
