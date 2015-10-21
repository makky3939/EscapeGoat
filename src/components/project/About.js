import React from 'react'

const About = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <h1>About</h1>
          <hr />
          <section className="section">
            <h2>EscapeGoatについて</h2>
            <p>
            EscapeGoatは、筑波大学 情報学群 知識情報・図書館学類生向けの卒業判定アプリです。
            </p>

            <section className="subSection">
              <h3>由来</h3>
              <p>scapegoatという単語があります。</p>
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
              野に放たれるやぎを、学部を卒業する学生にたとえて<code>EscapeGoat</code>という名前をつけました。
              開発者がヤギが好きであるなどの感情的な理由はありません。
            </p>
            <hr />
          </section>

          <section className="section">
            <h2>卒業判定について</h2>
            <p>当サイトに掲載された情報に基づいて為された判断を原因として発生したいかなるトラブル・損失・損害に対しても、makky.io は責任を負いません。</p>
            <p>当サイトに掲載された全部又は一部の情報は、予告なく変更・中断することがあります。また、当サイトの運営は予告なく中止することがあります。当サイトからの情報をご利用になったこと、またはご利用になれなかったことにより生じたいかなるトラブル・損失・損害についても責任を負いませんのでご了承ください。</p>
            <hr />
          </section>

          <section className="section">
            <h2>バグ報告</h2>
            <p>
              卒業判定や集計結果の表示等に不具合がある場合は
              <ul>
                <li><a href="https://twitter.com/_Makky_" target="_blank">Twitter</a></li>
                <li><a href="https://github.com/makky3939/EscapeGoat/issues" target="_blank">Github Issues</a></li>
                <li><a href="https://github.com/makky3939/EscapeGoat/pulls" target="_blank">Github Pull Request</a></li>
              </ul>
              などの方法で報告をお願いします。
            </p>
            <hr />
          </section>

          <section className="section">
            <h2>アクセスログの収集について</h2>
            <p>当サイトでは、Googleが提供する「Google Analytics」を使用しています。Google Analyticsは、サイトの利用状況を解析するため、「Cookie」を使用しています。収集される情報はGoogleのポリシーに基づいて管理されます。 Google Analyticsについて、およびGoogle社のプライバシーポリシーについては以下をご覧ください。</p>
            <div className="alert alert-info" role="alert">
              <strong>Tips</strong> 成績に関する情報は含まれません。
            </div>
          </section>
        </div>
      </div>
    )
  }
})

module.exports = About
