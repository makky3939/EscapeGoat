import React from 'react'

// UI
import ImputFile from './../ui/Imput/File.js'

// Store
import RecordStore from '../../stores/RecordStore.js'

module.exports = React.createClass({
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>EscapeGoat</h1>
          <p>卒業判定ツール for klis</p>
        </div>

        <h2>Usage</h2>
        <hr />
        <ImputFile></ImputFile>
      </div>
    )
  }
})
