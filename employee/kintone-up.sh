#!/bin/sh
npm run build

DOMAIN='zupulxar92j3'
USERNAME='hers.systems@gmail.com'
PASSWORD='Hers0330'
MANIFEST_FILE_PATH='./kintone.json'

kintone-customize-uploader \
    --domain ${DOMAIN}.cybozu.com \
    --username $USERNAME \
    --password $PASSWORD \
    $MANIFEST_FILE_PATH
