import { KintoneRecordManager } from './modules/index';

(() => {
  "use strict";
  // INDEX = 'app.record.index.show'; // 一覧ページ表示の際
  // DETAIL = 'app.record.detail.show'; // レコード表示の際
  // CREATE = 'app.record.create.show'; // 追加ページ表示の際
  // EDIT = 'app.record.edit.show'; // レコード編集ページの際
  // REPORT = 'app.report.show'; // グラフ表示

  // 一覧ページ
  kintone.events.on('app.record.index.show', (event) => {
    // 全てのレコード取得
    (new KintoneRecordManager).getProcessingRecords()
    .then(response => {
      // レコード取得後の処理
      console.log(response.records);
    });
  });
})();
