var React = require('react');

var package = require('../../../package.json');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="Footer">
        <div className="text-xs-center">
          <a onClick={function() {window.scrollTo(0, 0);}}>
            <i className="fa fa-angle-double-up fa-fw fa-lg" />
          </a>
          <div>
            <ol className="list-inline">
              <li>
                <a href="https://github.com/makky3939/EscapeGoat" target="_blank">Github Project</a>
              </li>
              <li>
                <a href="https://github.com/makky3939/EscapeGoat/issues" target="_blank">Issues</a>
              </li>
              <li>
                <a href="http://www.makky.io" target="_blank">makky.io</a>
              </li>
              <li>
                <a href="https://twitter.com/share?url=http://app.makky.io/escapegoat/&hashtags=klis&text=klis向け卒業判定アプリ-EscapeGoat" target="_blank">Share on Twitter</a>
              </li>
            </ol>
            <span>&copy; makky.io All Rights Reserved.<br /></span>
            <span>EscapeGoat v{package.version}</span>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
