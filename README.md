## セットアップ

### npmファイルのインストール

```
npm install
```

### Bowerファイルのインストール
初回起動時はインストール前に必要になりそうなファイルを把握してbower.jsonを書き換えておくとよい

```
bower install
```

> #### note
> bowerのインストールとnpmファイルのインストールは下記のコマンドで同時に実行できます。 
>
> ```
> npm run setup
> ```

### ビルドの実行
初回起動時にconfig.yml内を確認

```
gulp build
```
