import React from 'react'

// UI
import Table from '../ui/Table/Index.js'
import Container from './../ui/Container.js'

// Store
import RecordStore from '../../stores/RecordStore.js'


/**
 * Retrieve the current Record data from the RecordStore
 */
function getRecordState() {
  return {
    allRecords: RecordStore.getAll()
  }
}

let TableView = React.createClass({
  getInitialState: function() {
    return getRecordState()
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
      <Container style="col-sm-12">
        <h1>履修科目一覧</h1>
        <Table header={tableHeader} body={records} />
      </Container>
    )
  },

  /**
   * Event handler for 'change' events coming from the RecordStore
   */
  _onChange: function() {
    this.setState(getRecordState())
  }
})

module.exports = TableView
