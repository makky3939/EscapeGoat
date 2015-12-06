var React = require('react');

// Store
var RecordStore = require('../../stores/RecordStore.js');

// UI
var Container = require('./../ui/Container.js');
var Table = require('../ui/Table/Index.js');
var Score = require('./../ui/Score.js');

function getRecordState() {
  return {
    allRecords: RecordStore.getAll()
  };
}



var Librarian = React.createClass({
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
    var allRecords = this.state.allRecords;

    var findById = function(ids) {
      var score = 'none';
      for(var i = 0; i < Object.keys(allRecords).length; i++) {
        var record = allRecords[i];
        if (ids.indexOf(record.subjectCode) != -1) {
          score = record.score || 'wip';
          break;
        }
      };
      return score;
    };

    return (
      <Container style="col-sm-12">
        <h1>司書資格判定</h1>
        <div className="alert alert-info" role="alert">
          大学において修得すべき図書館に関する科目［新課程］（平成 24 年度以降入学・編入学者用）にのみ対応しています。<br/>
          （旧課程の実装については対応中です。）
        </div>
        <hr />
        <section>
          <h2>甲群</h2>
          <p>必修11科目・22単位</p>

          <table className='table table-bordered table-sm'>
            <thead className='thead-default'>
              <tr >
                <th colSpan='2' className='text-xs-center'>図書館法施行規則に定める科目</th>
                <th colSpan='2' className='text-xs-center'>本学における開設授業科目</th>
                <th rowSpan='2' className='text-xs-center'>成績</th>
                <th rowSpan='2' className='text-xs-center'>備考</th>
              </tr>
              <tr>
                <th className='text-xs-center'>科目</th>
                <th className='text-xs-center'>単位数</th>
                <th className='text-xs-center'>授業科目</th>
                <th className='text-xs-center'>単位数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>生涯学習概論</td>
                <td className='text-xs-center'>2</td>
                <td>生涯学習と図書館</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE21701'])} /></td>
                <td></td>
              </tr>
              <tr>
                <td>図書館概論</td>
                <td className='text-xs-center'>2</td>
                <td>図書館概論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE80201'])} /></td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan="2">図書館制度・経営論</td>
                <td rowSpan="2" className='text-xs-center'>2</td>
                <td>経営・組織論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE21501'])} /></td>
                <td rowSpan="2" className='text-xs-center'>2科目<br />を履修</td>
              </tr>
              <tr>
                <td>図書館情報法制度論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE81601'])} /></td>
              </tr>
              <tr>
                <td>図書館情報技術論</td>
                <td className='text-xs-center'>2</td>
                <td>情報基礎</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE10301'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td>図書館サービス概論</td>
                <td className='text-xs-center'>2</td>
                <td>情報サービス経営論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE80501'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td rowSpan="2">情報サービス論</td>
                <td rowSpan="2" className='text-xs-center'>2</td>
                <td>情報探索論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE20601'])} /></td>
                <td rowSpan="2" className='text-xs-center'>1科目<br/>を選択</td>
              </tr>
              <tr>
                <td>情報サービス構成論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE80801'])} /></td>
              </tr>

              <tr>
                <td>児童サービス論</td>
                <td className='text-xs-center'>2</td>
                <td>読書と豊かな人間性</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE40401'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td rowSpan="2">情報サービス演習</td>
                <td rowSpan="2" className='text-xs-center'>2</td>
                <td>知識情報演習 II </td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE11112', 'GE11122'])} /></td>
                <td rowSpan="2" className='text-xs-center'>2科目<br />を履修</td>
              </tr>
              <tr>
                <td>情報基礎実習</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE10413', 'GE10423'])} /></td>
              </tr>

              <tr>
                <td>図書館情報資源概論</td>
                <td className='text-xs-center'>2</td>
                <td>コレクションとアクセス</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE80901'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td>情報資源組織論</td>
                <td className='text-xs-center'>2</td>
                <td>知識資源組織化論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE21001'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td rowSpan="2">情報資源組織演習</td>
                <td rowSpan="2" className='text-xs-center'>2</td>
                <td>知識情報演習 I </td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE11012', 'GE11022'])} /></td>
                <td rowSpan="2" className='text-xs-center'>2科目<br />を履修</td>
              </tr>
              <tr>
                <td>知識情報演習 III</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE11212', 'GE11222'])} /></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>乙群</h2>
          <p>選択2科目・2単位</p>

          <table className='table table-bordered table-sm'>
            <thead className='thead-default'>
              <tr>
                <th colSpan='2' className='text-xs-center'>図書館法施行規則に定める科目</th>
                <th colSpan='2' className='text-xs-center'>本学における開設授業科目</th>
                <th rowSpan='2' className='text-xs-center'>成績</th>
                <th rowSpan='2' className='text-xs-center'>備考</th>
              </tr>
              <tr>
                <th className='text-xs-center'>科目</th>
                <th className='text-xs-center'>単位数</th>
                <th className='text-xs-center'>授業科目</th>
                <th className='text-xs-center'>単位数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>図書館基礎特論</td>
                <td className='text-xs-center'>1</td>
                <td>図書館論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE80201'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td>図書館サービス特論</td>
                <td className='text-xs-center'>1</td>
                <td>ディジタルライブラリ</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE70401'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td rowSpan="6">図書館情報資源特論</td>
                <td rowSpan="6" className='text-xs-center'>1</td>
                <td>日本図書学</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE82101'])} /></td>
                <td rowSpan="6" className='text-xs-center'>いずれか<br/>1科目<br/>を選択</td>
              </tr>

              <tr>
                <td>中国図書学</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE82001'])} /></td>
              </tr>

              <tr>
                <td>知識資源の分析</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE71201'])} /></td>
              </tr>

              <tr>
                <td>知識資源の用語管理</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE71401'])} /></td>
              </tr>

              <tr>
                <td>学術メディア論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE60801'])} /></td>
              </tr>

              <tr>
                <td>ディジタルドキュメント</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE70301'])} /></td>
              </tr>

              <tr>
                <td>図書・図書館史</td>
                <td className='text-xs-center'>1</td>
                <td>図書館論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE81901'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td>図書館施設論</td>
                <td className='text-xs-center'>1</td>
                <td>図書館建築論</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE61101'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td>図書館実習</td>
                <td className='text-xs-center'>1</td>
                <td>インターンシップ</td>
                <td className='text-xs-center'>2</td>
                <td className='text-xs-center'><Score status={findById(['GE40603'])} /></td>
                <td></td>
              </tr>

              <tr>
                <td>図書館総合演習</td>
                <td className='text-xs-center'>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </Container>
    );
  },

  _onChange: function() {
    this.setState(getRecordState());
  }
});

module.exports = Librarian;
