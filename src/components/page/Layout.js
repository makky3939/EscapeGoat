import React from 'react'

// Component
import Navbar from '../project/Navbar.js'
import Footer from '../project/Footer.js'

// Action
import RecordAction from './../../actions/RecordAction.js'

module.exports = React.createClass({
  componentDidMount: function() {

    if (sessionStorage.length > 0) {
      for (var i=0; i < sessionStorage.length; i++) {
        if (!sessionStorage.key(i).match(/@@/)) {
          RecordAction.create(
            JSON.parse(sessionStorage.getItem(sessionStorage.key(i))),
            true
          )
        }
      }
    }

  },

  render() {
    return (
      <div>
        <Navbar />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
})
