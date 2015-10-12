import React from 'react'
import { Router, Route, Link } from 'react-router'

const Dashboard = React.createClass({
  render() {
    return (
      <div>Dashboard</div>
    )
  }
})

const About = React.createClass({
  render() {
    return (
      <div>About</div>
    )
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>Inbox</div>
    )
  }
})

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
      </div>
    )
  }
})


const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'about', component: About },
    { path: 'inbox', component: Inbox },
  ]
}

React.render(<Router routes={routes} />, document.body)
