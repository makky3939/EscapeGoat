import React from 'react'

import TableCell from './Cell.js'

const TableRow = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    list: React.PropTypes.array.isRequired
  },
  render() {
    const type = this.props.type
    return (
      <tr>
        {
          this.props.list.map(function(item, index) {
            return <TableCell key={ index } type={ type } item={ item } />
          })
        }
      </tr>
    )
  }
})

module.exports = TableRow
