import React from 'react'
import { Link } from 'react-router'

import Landing from './../page/Landing.js'
import Tableview from './../page/Tableview.js'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <div className="list-group">
            <Link className="list-group-item" to="/landing">Landing</Link>
            <Link className="list-group-item" to="/tableview">TableView</Link>
          </div>
          <hr />
        </div>

        <div className="col-sm-9">
          <div className="jumbotron">
            <h1>EscapeGoat</h1>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>

        <footer className="col-xs-12">
          <hr />
          <p>&copy; makky.io All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
})
