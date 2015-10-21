import React from 'react'

const Container = React.createClass({
  propTypes: {
    style: React.PropTypes.string
  },

  render() {
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
