# plugbase

プラグインで拡張できる。
ぼくたちの御用達ツール。

ここは開発用ブランチだよ。


# フロントエンドのビルド方法
```shell-session
$ yarn run build:front
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


# Backend
## ビルド/起動
```shell-session
$ yarn run build:back && yarn run start:back
```
