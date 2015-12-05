var React = require('react')

var Container = React.createClass({
  propTypes: {
    style: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="container">
        <div className={this.props.style}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = Container
