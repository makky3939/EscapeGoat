import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Page components
import Layout from './components/page/Layout.js'

// Project components
import Usage from './components/project/Usage.js'
import Records from './components/project/Records.js'
import Dashboard from './components/project/Dashboard.js'
import About from './components/project/About.js'

function onUpdateHandler() {
  window.scrollTo(0, 0)
  ga('send', 'pageview', "/escapegoat" + location.pathname)
}

onUpdateHandler()

React.render((
  <Router onUpdate={() => onUpdateHandler()} history={createBrowserHistory()}>
    <Route path="escapegoat/" component={Layout}>
      <Route path="usage" component={Usage} />
      <Route path="records" component={Records} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="about" component={About} />
    </Route>
    <Redirect from="/" to="escapegoat/usage" />
  </Router>
), document.body)
