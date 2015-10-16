import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  render() {
    return (
      <div className="list-group">
        <Link className="list-group-item" to="/usage" activeClassName="active">Usage</Link>
        <Link className="list-group-item" to="/records" activeClassName="active">Records</Link>
      </div>
    )
  }
})