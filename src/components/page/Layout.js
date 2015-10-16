import React from 'react'

// Component
import Sidebar from '../project/Sidebar.js'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <Sidebar />
          <hr />
        </div>

        <div className="col-sm-9">
          {this.props.children}
        </div>

        <footer className="col-xs-12">
          <hr />
          <div className="text-xs-center">
            <a href="#top">
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
              <span>&copy; makky.io All Rights Reserved.</span>
            </p>
          </div>
        </footer>
      </div>
    )
  }
})
