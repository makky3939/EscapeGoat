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
          <h2>EscapeGoatについて</h2>
          <hr />
          <p>
          EscapeGoatは、筑波大学 情報学群 知識情報・図書館学類生向けの卒業判定アプリです。
          </p>

          <section className="usage__subSection">
            <h3>由来</h3>
            <blockquote className="blockquote">
              <p>
                いけにえの山羊 (やぎ) の意。出典は旧約聖書『レビ記』。
                贖罪 (しょくざい) のためやぎに罪を背負わせて野に放ったという故事からこの言葉が生れた。
                転じて，現在では民衆の不満や怒りの解決のために，代りに攻撃の標的とされてしまう者，集団，国，民族などのことをいう。
              </p>
              <footer>ブリタニカ国際大百科事典 小項目事典 より</footer>
            </blockquote>
          </section>

          <p>
            野に放たれたやぎを、学部を卒業する学生にたとえて<code>EscapeGoat</code>という名前をつけました。
            開発者がヤギが好きであるなどの感情的な理由ではありません。<s>あります</s>
          </p>
        </section>

        <section className="usage__section">
          <h2>使い方</h2>
          <hr />
          <section className="usage__subSection">
            <h3>TwinsからCSVファイルのダウンロード</h3>
            <ol>
              <li><a>Twins</a>にアクセスし、<code>履修 -> 科目区分参照・変更</code> を選択します。</li>
              <li>クリック後に表示されたページの下部にある<code>ダウンロードボタン</code>を選択肢し、ダウンロードしてください。</li>
            </ol>
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
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
