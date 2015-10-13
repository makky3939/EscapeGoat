import React from 'react'

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
      self.setState({
        data_uri: upload.target.result,
      })
    }

    reader.readAsDataURL(file)
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <input type="file" className="form-control" onChange={this.handleFile} />
      </form>
    )
  }
})
