var React = require('react');

// Ui
var Navbar = require('../ui/Navbar.js');
var Footer = require('../ui/Footer.js');

// Action
var RecordAction = require('./../../actions/RecordAction.js');

module.exports = React.createClass({
  componentDidMount: function() {
    if (typeof sessionStorage !== 'undefined') {
      if (sessionStorage.length > 0) {
        for (var i=0; i < sessionStorage.length; i++) {
          if (!sessionStorage.key(i).match(/@@/)) {
            RecordAction.create(
              JSON.parse(sessionStorage.getItem(sessionStorage.key(i))),
              true
            );
          }
        }
      }
    }
  },

  render: function() {
    return (
      <div>
        <Navbar />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
});
