import React from 'react'

// UI
import Table from '../ui/Table/index.js'

// Store
import RecordStore from '../../stores/RecordStore.js'

function getRecordState() {
  return {
    foundation: RecordStore.foundation(),
    special: RecordStore.special()
  }
}

function adjustRecord(records) {
  return (
    Object.keys(records).map(function(index) {
      let record = records[index]
      return [
        record.subjectCode,
        record.subjectName,
        record.score,
        record.unit
      ]
    })
  )
}

const Dashboard = React.createClass({
  getInitialState: function() {
    return getRecordState()
  },

  componentDidMount: function() {
    RecordStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function() {
    RecordStore.removeChangeListener(this._onChange)
  },

  render() {
    const tableHeader = ["科目番号", "科目名", "成績", "単位"]
    // const foundation = this.state.foundation
    // let foundation_records = Object.keys(foundation).map(function(index) {
    //   let record = foundation[index]
    //   return [
    //     record.subjectCode,
    //     record.subjectName,
    //     record.score,
    //     record.unit
    //   ]
    // })

    const special_required = adjustRecord(this.state.special.required)
    const special_optional = adjustRecord(this.state.special.optional)
    const special_free = adjustRecord(this.state.special.free)


    return (
      <div>
        <h2>Dashboard</h2>

        <h3>基礎科目</h3>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h4>必修科目</h4>
          </div>
          <div className="col-sm-4">
            <h4>選択科目</h4>
          </div>
          <div className="col-sm-4">
            <h4>自由科目</h4>
          </div>
        </div>

        <h3>専門基礎科目</h3>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h4>必修科目</h4>
          </div>
          <div className="col-sm-4">
            <h4>選択科目</h4>
          </div>
          <div className="col-sm-4">
            <h4>自由科目</h4>
          </div>
        </div>

        <h3>専門科目</h3>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h4>必修科目</h4>
            <Table header={tableHeader} body={special_required} />
          </div>
          <div className="col-sm-4">
            <h4>選択科目</h4>
            <Table header={tableHeader} body={special_optional} />
          </div>
          <div className="col-sm-4">
            <h4>自由科目</h4>
            <Table header={tableHeader} body={special_free} />
          </div>
        </div>

      </div>
    )
  },

  _onChange: function() {
    this.setState(getRecordState());
  }
})

module.exports = Dashboard
