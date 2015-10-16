import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  render() {
    return (
      <div className="list-group">
        <Link className="list-group-item" to="/usage" activeClassName="active">Top</Link>
        <Link className="list-group-item" to="/records" activeClassName="active">履修科目一覧</Link>
      </div>
    )
  }
})
