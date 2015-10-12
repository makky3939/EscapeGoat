import React from 'react'
import { Router, Route, Link } from 'react-router'

const Landing = React.createClass({
  render() {
    return (
      <div>Landing</div>
    )
  }
})

const Tableview = React.createClass({
  render() {
    return (
      <div>Tableview</div>
    )
  }
})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>EscapeGoat</h1>
        <ul>
          <li><Link to="/landing">Landing</Link></li>
          <li><Link to="/tableview">TableView</Link></li>
        </ul>
        <div className="detail">
          {this.props.children}
        </div>
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
