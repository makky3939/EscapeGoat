var React = require('react');

var Score = React.createClass({
  propTypes: {
    status: React.PropTypes.string.isRequired,
  },
  render: function() {
    switch(this.props.status) {
      case "none":
        return <span className='tag tag-warning'>未履修</span>;
        break;

      case "wip":
        return <span className='tag tag-info'>履修中</span>;
        break;
      default:
        return <span className='tag tag-success'>{this.props.status}</span>;
        break;
    }
  }
});

module.exports = Score;
