import React from 'react'

// Component
import Sidebar from '../project/Sidebar.js'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <Sidebar />
          <hr />
        </div>

        <div className="col-sm-9">
          {this.props.children}
        </div>

        <footer className="col-xs-12">
          <hr />
          <p>&copy; makky.io All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
})
