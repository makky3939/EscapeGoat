import React from 'react'

const TableCell = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    item: React.PropTypes.string
  },

  render() {
    switch(this.props.type) {
      case "head":
        return <th>{ this.props.item }</th>
        break

      case "body":
        return <td>{ this.props.item }</td>
        break
    }
  }
})

module.exports = TableCell
