var React = require('react');

var TableCell = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    item: React.PropTypes.string
  },

  render: function() {
    switch(this.props.type) {
      case "head":
        return <th>{ this.props.item }</th>;
        break;

      case "body":
        return <td>{ this.props.item }</td>;
        break;
    }
  }
});

module.exports = TableCell;
