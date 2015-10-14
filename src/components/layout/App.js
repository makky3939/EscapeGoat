import React from 'react'
import { Link } from 'react-router'

import Usage from './../page/Usage.js'
import Tableview from './../page/Tableview.js'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <div className="list-group">
            <Link className="list-group-item" to="/usage" activeClassName="active">Usage</Link>
            <Link className="list-group-item" to="/tableview" activeClassName="active">TableView</Link>
          </div>
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
