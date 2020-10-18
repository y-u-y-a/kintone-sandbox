// kintoneのレコード操作するクラス
class KintoneRecordManager {

  // インスタンス生成時に作成/実行
  constructor() {
    this.records = [];
    this.appId = null;
    this.query = '';
    this.limit = 100;
    this.offset = 0;
  }

  // メソッド
  getAllRecords() {
    return new Promise(resolve => {
      this.appId = kintone.app.getId();
      this.records = [];
      this.getRecords()
      .then(() => {
        resolve(this);
      });
    });
  }
  // レコード取得
  getRecords() {
    return kintone.api('/k/v1/records', 'GET', {
      app: this.appId,
      query: this.query + (' limit ' + this.limit + ' offset ' + this.offset)
    }).then(response => {
      let len;
      Array.prototype.push.apply(this.records, response.records);
      len = response.records.length;
      this.offset += len;
      if (len < this.limit) {
        this.ready = true;
      } else {
        return this.getRecords();
      }
    });
  }
}

export default KintoneRecordManager;
