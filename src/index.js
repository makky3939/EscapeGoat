import React from 'react'
import { Router, Redirect } from 'react-router'

import App from './components/layout/App.js'
import Usage from './components/page/Usage.js'
import TableView from './components/page/TableView.js'

const routes = {
  path: '/',
  component: App,
  indexRoute: { path: "" },
  childRoutes: [
    { path: 'usage', component: Usage },
    { path: 'tableview', component: TableView }
  ]
}

React.render(<Router routes={routes} />, document.body)
