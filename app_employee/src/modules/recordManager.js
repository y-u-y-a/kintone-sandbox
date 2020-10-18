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

  // レコード関連の処理を実行
  async processRecords() {
    this.appId = kintone.app.getId();
    this.records = []; // 初期化
    await this.setRecords(); // API通信が全て完了するまで待つ
    return this;
  }
  // レコード取得
  async setRecords() {
    // API通信で取得
    let params = {
      app: this.appId,
      query: `${this.query} limit ${this.limit} offset ${this.offset}`
    }
    let res = await kintone.api('/k/v1/records', 'GET', params);

    Array.prototype.push.apply(this.records, res.records); // 配列を結合
    let len = res.records.length; // 結合後の要素数を取得
    this.offset += len;
    if (len < this.limit) this.ready = true;
    else return this.setRecords(); // コールバック？
  }
}

export default KintoneRecordManager;
