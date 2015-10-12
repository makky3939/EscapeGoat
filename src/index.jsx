import React from 'react'
import { Router, Route, Link } from 'react-router'

const Landing = React.createClass({
  render() {
    return (
      <h2>Landing</h2>
    )
  }
})

const Tableview = React.createClass({
  render() {
    return (
      <h2>Tableview</h2>
    )
  }
})

const App = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <div className="list-group">
            <Link className="list-group-item" to="/landing">Landing</Link>
            <Link className="list-group-item" to="/tableview">TableView</Link>
          </div>
          <hr />
        </div>

        <div className="col-sm-9">
          <div className="jumbotron">
            <h1>EscapeGoat</h1>
          </div>
          <div>
            {this.props.children}
          </div>
        </div>

        <footer className="col-xs-12">
          <hr />
          <p>&copy; makky.io All Rights Reserved.</p>
        </footer>
      </div>
    )
  }
})

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'landing', component: Landing },
    { path: 'tableview', component: Tableview }
  ]
}

React.render(<Router routes={routes} />, document.body)
