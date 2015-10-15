import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <div className="list-group">
            <Link className="list-group-item" to="/usage" activeClassName="active">Usage</Link>
            <Link className="list-group-item" to="/records" activeClassName="active">Records</Link>
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
