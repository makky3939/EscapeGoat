import React from 'react'
import { Router } from 'react-router'

import App from './components/layout/App.js'
import Landing from './components/page/Landing.js'
import TableView from './components/page/TableView.js'

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    { path: 'landing', component: Landing },
    { path: 'tableview', component: TableView }
  ]
}

React.render(<Router routes={routes} />, document.body)
