import { KintoneRecordManager } from './modules/index';

const INDEX = 'app.record.index.show'; // 一覧ページ表示の際
// const DETAIL = 'app.record.detail.show'; // レコード表示の際
// const CREATE = 'app.record.create.show'; // 追加ページ表示の際
// const EDIT = 'app.record.edit.show'; // レコード編集ページの際
// const REPORT = 'app.report.show'; // グラフ表示

(() => {
  "use strict";

  // 一覧ページ

  kintone.events.on(INDEX, (event) => {
    // 全てのレコード取得
    let kintone_manager = new KintoneRecordManager;
    let all_records = kintone_manager.getProcessingRecords()
    .then(response => {
      // レコード取得後の処理
      console.log(response.records);
    });
  });
})();
