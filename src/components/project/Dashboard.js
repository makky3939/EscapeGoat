var React = require('react');

// UI
var Table = require('../ui/Table/Index.js');
var Container = require('./../ui/Container.js');

// Store
var RecordStore = require('../../stores/RecordStore.js');


function getRecordState() {
  return {
    basic: RecordStore.basic(),
    specialBasic: RecordStore.specialBasic(),
    special: RecordStore.special(),
    weightedAverage: RecordStore.weightedAverage()
  };
}

function adjustRecord(records) {
  return (
    Object.keys(records).map(function(index) {
      var record = records[index];
      return [
        record.subjectCode,
        record.subjectName,
        record.score,
        record.unit
      ];
    })
  );
}

var Dashboard = React.createClass({
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
    var tableHeader = ["科目番号", "科目名", "成績", "単位"];

    var basic = this.state.basic;
    var specialBasic = this.state.specialBasic;
    var special = this.state.special;
    var weightedAverage = this.state.weightedAverage;

    var required = specialBasic.required.credit + special.required.credit + basic.required.credit + basic.optional.credit;
    var optional = specialBasic.optional.credit + special.optional.credit;
    var free = specialBasic.free.credit + special.free.credit + basic.free.credit;
    return (
      <Container style="col-sm-12">
        <h1>卒業判定</h1>
        <div className="alert alert-info" role="alert">
          現在、klis13(三年次編入を除く)向けの判定処理を先行実装しています。<br/>
          klis13以外の判定についても実装予定です。（上手く処理できないケースを教えていただけると早く直ります）
        </div>
        <hr />
        <section>
          <section>
            <h2>概要</h2>
            <div className="row">
              <div className="col-xs-12">
                <div className="card col-md-4 col-sm-6 col-xs-12">
                  <div className="card-block">
                    <h4 className="card-title">必修科目</h4>
                    <p>{required}/51.5</p>
                  </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-xs-12">
                  <div className="card-block">
                    <h4 className="card-title">選択科目</h4>
                    <p>{optional}/62</p>
                  </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-xs-12">
                  <div className="card-block">
                    <h4 className="card-title">自由科目</h4>
                    <p>{free}/12</p>
                  </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-xs-12">
                  <div className="card-block">
                    <h4 className="card-title">合計</h4>
                    <p>{required + optional + free}/125.5</p>
                  </div>
                </div>
                <div className="card col-md-4 col-sm-6 col-xs-12">
                  <div className="card-block">
                    <h4 className="card-title">GPA</h4>
                    <p>{weightedAverage}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>基礎科目</h2>
            <hr />
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  必修科目(総合+体育)
                </h3>
                <p><span className="pull-left">{basic.required.credit}/10</span></p>
                <Table header={tableHeader} body={adjustRecord(basic.required.records)} />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  選択科目(外国語)
                </h3>
                <p><span className="pull-left">{basic.optional.credit}/9</span></p>
                <Table header={tableHeader} body={adjustRecord(basic.optional.records)} />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  自由科目
                </h3>
                <p><span className="pull-left">{basic.free.credit}/0</span></p>
                <Table header={tableHeader} body={adjustRecord(basic.free.records)} />
              </div>
            </div>
          </section>

          <section>
            <h2>専門基礎科目</h2>
            <hr />
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  必修科目
                </h3>
                <p><span className="pull-left">{specialBasic.required.credit}/22.5</span></p>
                <Table header={tableHeader} body={adjustRecord(specialBasic.required.records)} />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  選択科目
                </h3>
                <p><span className="pull-left">{specialBasic.optional.credit}/32</span></p>
                <Table header={tableHeader} body={adjustRecord(specialBasic.optional.records)} />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  自由科目
                </h3>
                <p><span className="pull-left">{specialBasic.free.credit}/0</span></p>
                <Table header={tableHeader} body={adjustRecord(specialBasic.free.records)} />
              </div>
            </div>
          </section>

          <section>
            <h2>専門科目</h2>
            <hr />
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  必修科目
                </h3>
                <p><span className="pull-left">{special.required.credit}/10</span></p>
                <Table header={tableHeader} body={adjustRecord(special.required.records)} />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  選択科目
                </h3>
                <p><span className="pull-left">{special.optional.credit}/30</span></p>
                <Table header={tableHeader} body={adjustRecord(special.optional.records)} />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h3>
                  自由科目
                </h3>
                <p><span className="pull-left">{special.free.credit}/0</span></p>
                <Table header={tableHeader} body={adjustRecord(special.free.records)} />
              </div>
            </div>
          </section>
        </section>
      </Container>
    );
  },

  _onChange: function() {
    this.setState(getRecordState());
  }
});

module.exports = Dashboard;
