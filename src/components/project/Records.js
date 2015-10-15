import React from 'react'

// UI
import Table from '../ui/Table/index.js'

// Store
import RecordStore from '../../stores/RecordStore.js'

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getRecordState() {
  return {
    allRecords: RecordStore.getAll()
  };
}

let TableView = React.createClass({
  getInitialState: function() {
    return getRecordState();
  },

  componentDidMount: function() {
    RecordStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    RecordStore.removeChangeListener(this._onChange);
  },

  render() {
    const tableHeader = ["科目区分", "履修年度", "期間", "科目番号", "科目名", "教員", "成績", "単位"]
    const allRecords = this.state.allRecords
    const records = Object.keys(allRecords).map(function(index) {
      let record = allRecords[index]
      return [
        record.type,
        record.year,
        record.term,
        record.subjectCode,
        record.subjectName,
        record.teacher,
        record.score,
        record.unit
      ]
    })

    return (
      <div>
        <h2>Records</h2>
        <hr />
        <Table header={tableHeader} body={records} />
      </div>
    )
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    this.setState(getTodoState());
  }
})

module.exports = TableView
