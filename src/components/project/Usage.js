import React from 'react'

// UI
import ImputFile from './../ui/Imput/File.js'

// Store
import RecordStore from '../../stores/RecordStore.js'

module.exports = React.createClass({
  render() {
    return (
      <div className={this.props.route.path} >
        <div className="jumbotron">
          <h1>EscapeGoat</h1>
          <p>卒業判定アプリ for klis</p>
        </div>
        <section className="usage__section">
          <h2>使い方</h2>
          <hr />
          <section className="usage__subSection">
            <h3>TwinsからCSVファイルのダウンロード</h3>
            <ol>
              <li><a href="https://twins.tsukuba.ac.jp/campusweb/" target="_blank">Twins</a>にアクセスし、<code>履修 -> 科目区分参照・変更</code> を選択します。</li>
              <li>クリック後に表示されたページの下部にある<code>ダウンロードボタン</code>を選択肢し、ダウンロードしてください。</li>
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
          </section>

          <section className="usage__subSection">
            <h3>EscapeGoatでCSVファイルを読み込む</h3>
            <p>上記の方法でダウンロードしたCSVファイルを以下のフォームで指定してください。</p>
            <ImputFile></ImputFile>
            <p>
              <div className="alert alert-info" role="alert">
                <strong>Tips</strong> 指定したファイルはこのコンピュータ内で集計処理を行うために使用します
              </div>
            </p>
          </section>

          <section className="usage__subSection">
            <h3>Bleat...</h3>
            <p>以下のリンクまたはサイドバーから、指定したファイルを集計した結果を確認することが出来ます。</p>
          </section>
        </section>
      </div>
    )
  }
})
