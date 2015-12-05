var React = require('react')

// Component
var TableRow = require('./Row.js')

var Table = React.createClass({
  propTypes: {
    header: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    body: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.string)).isRequired
  },

  render: function() {
    return (
      <div className="table-responsive">
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
      </div>
    )
  }
})

module.exports = Table
