# kintoneカスタマイズ
JS/CSSアップロード：`https://developer.cybozu.io/hc/ja/articles/360015889812`
JSイベント：`https://developer.cybozu.io/hc/ja/articles/201941954`


## アプリを指定してJS/CSSをアップロード
- ライブラリインストール
```
$ npm install -g @kintone/customize-uploader
```
- manifest.jsonを作成
```js:
{
    "app": [アプリID],
    "scope": "ALL",
    "desktop": {
        "js": [JSファイルのパス],
        "css": [CSSファイルのパス]
    },
    "mobile": {
        "js": [JSファイルのパス],
        "css": [CSSファイルのパス]
    }
}
```
- アップロード(コマンドの場合)
```
$ kintone-customize-uploader --domain [サブドメイン].cybozu.com --username [ユーザー名] --password [パスワード] [manifest.jsonのパス]
```
- アップロード(スクリプトの場合)
```bash
#!/bin/sh
DOMAIN='ドメイン名'
USERNAME='ユーザー名'
PASSWORD='パスワード'
MANIFEST_FILE_PATH='./manifest.json'

kintone-customize-uploader \
    --domain ${DOMAIN}.cybozu.com \
    --username $USERNAME \
    --password $PASSWORD \
    $MANIFEST_FILE_PATH
```
