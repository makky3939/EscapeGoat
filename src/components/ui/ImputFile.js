import React from 'react'

import RecordAction from './../../actions/RecordAction.js'

module.exports = React.createClass({
  getInitialState() {
    return {
      data_uri: null,
    }
  },

  handleSubmit(e) {
    e.preventDefault()
  },

  handleFile(e) {
    let self = this
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onload = function(upload) {
      RecordAction.destroyAll()

      const csv = upload.target.result.replace(/"/g, "").replace(/, /g, "").split("\n")[1].split("\r")

      csv.map(function(item) {
        let i = item.split(",")
        if (i[1] != "") {
          RecordAction.create({
            type: i[0].split(":")[0],
            year: i[1],
            term: i[2],
            subjectCode: i[3],
            subjectName: i[4],
            teacher: i[5],
            score: i[6],
            unit: i[7]
          })
        }
      })
    }

    reader.readAsText(file)
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <input type="file" className="form-control" onChange={this.handleFile} />
      </form>
    )
  }
})
