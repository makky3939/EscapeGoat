import React from 'react'
import { Router, Route, Redirect } from 'react-router'

// Page components
import Layout from './components/page/Layout.js'

// Project components
import Usage from './components/project/Usage.js'
import Records from './components/project/Records.js'

React.render((
  <Router>
    <Route component={Layout}>
      <Route path="usage" component={Usage} />
      <Route path="records" component={Records} />
    </Route>
    <Redirect from="/" to="/usage" />
  </Router>
), document.body)
