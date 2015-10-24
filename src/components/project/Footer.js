import React from 'react'

const Footer = React.createClass({
  render() {
    return (
      <footer className="Footer">
        <div className="text-xs-center">
          <a onClick={() => window.scrollTo(0, 0)}>
            <i className="fa fa-angle-double-up fa-fw fa-lg" />
          </a>
          <p>
            <ol className="list-inline">
              <li>
                <a href="/">Top</a>
              </li>
              <li>
                <a href="https://github.com/makky3939/EscapeGoat" target="_blank">Github Project</a>
              </li>
              <li>
                <a href="https://github.com/makky3939/EscapeGoat/issues" target="_blank">Issues</a>
              </li>
              <li>
                <a href="http://www.makky.io" target="_blank">www.makky.io</a>
              </li>
            </ol>
            <span>&copy; makky.io All Rights Reserved.<br /></span>
            <span>EscapeGoat v1.0.6</span>
          </p>
        </div>
      </footer>
    )
  }
})

module.exports = Footer
