import React from 'react'
import ImputFile from './../ui/ImputFile.js'

module.exports = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>EscapeGoat</h1>
          <p>卒業判定ツール for klis</p>
        </div>

        <h2>Usage</h2>
        <ImputFile></ImputFile>
      </div>
    )
  }
})
