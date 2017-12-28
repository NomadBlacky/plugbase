# plugbase

プラグインで拡張できる。
ぼくたちの御用達ツール。

ここは開発用ブランチだよ。


# git-cloneするとき
```shell-session
$ git clone https://github.com/Kuzugunshi/plugbase --recursive
```

of

```haskell
$ git clone https://github.com/Kuzugunshi/plugbase
$ git submodule update --init
```


# フロントエンドのビルド方法
```shell-session
$ yarn run build:front
```

# 開発用サーバーの起動方法
```shell-session
$ yarn run develop
```


# editorconfig
　皆様すごく2 spaces indentationが大好きなようなので、良いでしょう。
editorconfigを使います。

- [GitHub - editorconfig/editorconfig: EditorConfig universal issue tracker and wiki](https://github.com/editorconfig/editorconfig)

　各位が各々のエディタにこれの設定（or 拡張）を導入することで、プロジェクトローカルなエディタの設定ができます。
例えば貴方が Vim/NeoVim を使っているならば、以下を導入し、
このプロジェクトのルートで Vim/NeoVim を起動すると、
このプロジェクトのルートにある`.editorconfig`の設定が読み込まれます。

- [GitHub - editorconfig/editorconfig-vim: EditorConfig plugin for Vim](https://github.com/editorconfig/editorconfig-vim)


# :notes: Project Specs :notes:
## プラグイン機構

- 各プラグインは一意なハッシュ値に紐づく

TODO: 「ロード済みプラグイン」について

TODO: 「未ロードプラグイン」について

## ディレクトリ構成

- `./plugins`
    - プラグインを置く場所
        - 例えばあるロード済みプラグイン`chat.js`があるとして、
          それは`./plugins/{hash-code}/chat.js`に配置される
        - 例えばある未ロードプラグイン`reversi.js`があるとして、
          それは`./plugins/reversi.js`に配置される
            - `./plugins/reversi.js`はバックエンドの起動時に
              `./plugins/{hash-code}/reversi.js`へ移され、ロード済みプラグインとなる
            - ここのプラグイン名（e.g. `reversi.js`）はワイルドカード表現`*.js`にマッチする
              （つまり「プラグインは単一のJavaScriptファイルだよ！」という意味です。ねこはいます）
