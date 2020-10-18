import KintoneRecordManager from './modules/recordManager';

'use strict';

const ev_index = 'app.record.index.show'; // 一覧ページ表示の際
// const ev_detail = 'app.record.detail.show'; // レコード表示の際
// const ev_create = 'app.record.create.show'; // 追加ページ表示の際
// const ev_edit = 'app.record.edit.show'; // レコード編集ページの際
// const ev_report = 'app.report.show'; // グラフ表示

// let kt = new KintoneRecordManager;
// let res = await kt.getAllRecords();
// console.log('all records:', res.records);
// console.log('kintone:', kintone);

// 一覧ページで実行
kintone.events.on(ev_index, async(event) => {
  console.log('event:', event);
  console.log('all records:', event.records);
});
