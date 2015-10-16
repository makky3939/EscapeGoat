import React from 'react'

// Component
import TableRow from './Row.js'

const Table = React.createClass({
  propTypes: {
    header: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    body: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired
  },
  render() {
    return (
      <table className="table">
        <thead className="thead-default">
          <TableRow type="head" list={ this.props.header } />
        </thead>
        <tbody>
          {
            this.props.body.map(function(items, index) {
              return <TableRow key={index} type="body" list={items} />
            })
          }
        </tbody>
      </table>
    )
  }
})

module.exports = Table
