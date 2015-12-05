var React = require('react');

// UI
var Table = require('../ui/Table/Index.js');
var Container = require('./../ui/Container.js');

// Store
var RecordStore = require('../../stores/RecordStore.js');

/**
 * Retrieve the current Record data from the RecordStore
 */
function getRecordState() {
  return {
    allRecords: RecordStore.getAll()
  };
}

var TableView = React.createClass({
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
    var tableHeader = ["区分", "年度", "期間", "科目番号", "科目名", "教員", "成績", "単位"];
    var allRecords = this.state.allRecords;
    var records = Object.keys(allRecords).map(function(index) {
      var record = allRecords[index];
      return [
        record.type,
        record.year,
        record.term,
        record.subjectCode,
        record.subjectName,
        record.teacher,
        record.score,
        record.unit
      ];
    });

    return (
      <Container style="col-sm-12">
        <h1>履修科目一覧</h1>
        <hr />
        <Table header={tableHeader} body={records} />
      </Container>
    );
  },

  /**
   * Event handler for 'change' events coming from the RecordStore
   */
  _onChange: function() {
    this.setState(getRecordState());
  }
});

module.exports = TableView;
