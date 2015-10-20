import React from 'react'

const About = React.createClass({
  render() {
    return (
      <div>
        <h1>About</h1>
        <section className="section">
          <h2>EscapeGoatについて</h2>
          <hr />
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
        </section>
      </div>
    )
  }
})

module.exports = About
