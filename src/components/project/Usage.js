var React = require('react');

var reactRouter = require('react-router');
var Link = reactRouter.Link;

// UI
var ImputFile = require('./../ui/Imput/File.js');
var Container = require('./../ui/Container.js');

// Store
var RecordStore = require('../../stores/RecordStore.js');

function getRecordState() {
  return {
    count: RecordStore.count()
  };
}

module.exports = React.createClass({
  getInitialState: function() {
    return getRecordState();
  },

  componentDidMount: function() {
    RecordStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    RecordStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <div className="jumbotron text-xs-center">
          <h1>EscapeGoat</h1>
          <p>The winner solution, for klis.</p>
        </div>

        <Container style="col-sm-12">
          <section>
            <h2>特徴</h2>
            <section>
              <div className="row">
                <div className="col-sm-4">
                  <h3>卒業判定</h3>
                  <p>筑波大学 情報学群 知識情報・図書館学類 の学生を対象とした卒業判定アプリです。</p>
                </div>
                <div className="col-sm-4">
                  <h3>司書資格判定</h3>
                  <p>司書資格の取得に必要な科目を履修しているかを確認することが出来ます。</p>
                </div>
                <div className="col-sm-4">
                  <h3>超セキュア</h3>
                  <p>成績情報の集計はあなたのコンピュータ上で行われ、外部のサーバへ送信されることはありません。</p>
                </div>
              </div>
              <hr />
            </section>

            <h2>使い方</h2>
            <section>
              <h3>TwinsからCSVファイルをダウンロード</h3>
              <ol>
                <li>
                  <a href="https://twins.tsukuba.ac.jp/campusweb/" target="_blank">Twins</a>にアクセスし、<code>履修から科目区分参照・変更</code> を選択します。
                </li>
                <li>
                  クリック後に表示されたページの下部にある<code>ダウンロードボタン</code>を選択肢し、ダウンロードしてください。
                </li>
              </ol>
              <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <div className="col-xs-6">
                    <div className="text-xs-center">
                      <small>step 1</small>
                    </div>
                    <img src="assets/images/usage-1.png" width="100%" height="auto" />
                  </div>
                  <div className="col-xs-6">
                    <div className="text-xs-center">
                      <small>step 2</small>
                    </div>
                    <img src="assets/images/usage-2.png" width="100%" height="auto" />
                  </div>
                </div>
              </div>

              <div>
                <br />
                <p className="alert alert-success" role="alert">
                  <strong>Tips</strong> サンプルとして開発者の成績データを利用できます。 (<a href="https://www.dropbox.com/s/xzf50wa4a2br7be/gakusei_xxxxxxxxx.csv?dl=0" target="_blank">DL</a>)
                </p>
              </div>
            </section>

            <section>
              <h3>EscapeGoatでCSVファイルを読み込む</h3>
              <p>上記の方法でダウンロードしたCSVファイルを以下のフォームで指定してください。</p>
              <ImputFile />
              <div>
                <br />
                <p className="alert alert-info" role="alert">
                  <strong>Tips</strong> 指定したファイルはこのコンピュータ内で集計処理を行うために使用します
                </p>
              </div>
            </section>

            <section>
              <h3>Bleat...</h3>
              <p>以下のボタンまたはナビゲーションバーから、集計結果を参照できます。</p>
              { !this.state.count ?
                <Link className="btn btn-success-outline btn-lg btn-block disabled" to="" disabled>Please set your csv</Link>:
                <Link className="btn btn-success btn-lg btn-block" to="/dashboard">Let&#39;s Go!</Link>
              }
            </section>
          </section>
        </Container>
      </div>
    );
  },
  _onChange: function() {
    this.setState(getRecordState());
  }
});
