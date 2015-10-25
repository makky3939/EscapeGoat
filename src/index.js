import React from 'react'
import { Router, Route, Redirect } from 'react-router'
import {createHistory, useBasename} from 'history'
import createBrowserHistory from 'history/lib/createBrowserHistory'

// Page components
import Layout from './components/page/Layout.js'

// Project components
import Usage from './components/project/Usage.js'
import Records from './components/project/Records.js'
import Dashboard from './components/project/Dashboard.js'
import About from './components/project/About.js'

// if (window.msCrypto) {
//   window.crypto = window.msCrypto
// }

function onUpdateHandler() {
  window.scrollTo(0, 0)
  ga('send', 'pageview')
}

onUpdateHandler()

const baseName = useBasename(createHistory)({
  basename: '/escapegoat'
})

React.render((
  <Router onUpdate={() => onUpdateHandler()} history={createBrowserHistory(), baseName}>
    <Route path="" component={Layout}>
      <Route path="/usage" component={Usage} />
      <Route path="/records" component={Records} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
    </Route>
    <Redirect from="/" to="/usage" />
  </Router>
), document.body)
