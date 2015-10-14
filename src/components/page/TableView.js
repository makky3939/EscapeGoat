import React from 'react'

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
    let records = this.state.allRecords
    return (
      <div>
        <h2>Tableview</h2>
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th>科目区分</th>
              <th>履修年度</th>
              <th>期間</th>
              <th>科目番号</th>
              <th>科目名</th>
              <th>教員</th>
              <th>成績</th>
              <th>単位</th>
            </tr>
          </thead>
          <tbody>
            { Object.keys(records).map(function(record_id) {
              let record = records[record_id]
              return (
                <tr>
                  <td>{record.type}</td>
                  <td>{record.year}</td>
                  <td>{record.term}</td>
                  <td>{record.subjectCode}</td>
                  <td>{record.subjectName}</td>
                  <td>{record.teacher}</td>
                  <td>{record.score}</td>
                  <td>{record.unit}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
