import React from 'react'

// Component
import TableCell from './Cell.js'

const TableRow = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    list: React.PropTypes.array.isRequired
  },
  render() {
    const type = this.props.type
    let rowStyle = ""
    switch (this.props.list[2]) {
      case "D":
        rowStyle = "table-danger"
        break
      case "":
        rowStyle = "table-success"
        break
    }
    return (
      <tr className={rowStyle}>
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
