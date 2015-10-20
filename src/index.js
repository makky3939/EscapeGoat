import React from 'react'
import { Router, Route, Redirect } from 'react-router'

// Page components
import Layout from './components/page/Layout.js'

// Project components
import Usage from './components/project/Usage.js'
import Records from './components/project/Records.js'
import Dashboard from './components/project/Dashboard.js'
import About from './components/project/About.js'

React.render((
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route component={Layout}>
      <Route path="usage" component={Usage} />
      <Route path="records" component={Records} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="about" component={About} />
    </Route>
    <Redirect from="/" to="/usage" />
  </Router>
), document.body)
