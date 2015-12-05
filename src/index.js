var React = require('react');
var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Redirect = reactRouter.Redirect;
var history = require('history');
var createHistory = history.createHistory;
var useBasename = history.useBasename;
var createBrowserHistory = require('history/lib/createBrowserHistory');

// Page components
var Layout = require('./components/page/Layout.js');

// Project components
var Usage = require('./components/project/Usage.js');
var Records = require('./components/project/Records.js');
var Dashboard = require('./components/project/Dashboard.js');
var About = require('./components/project/About.js');

function onUpdateHandler() {
  window.scrollTo(0, 0);
  ga('send', 'pageview');
}

onUpdateHandler();

var baseName = useBasename(createHistory)({
  basename: '/escapegoat/'
});

React.render((
  <Router history={baseName}>
    <Route path="" component={Layout}>
      <Route path="/usage" component={Usage} />
      <Route path="/records" component={Records} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about" component={About} />
    </Route>
    <Redirect from="/" to="/usage" />
  </Router>
), document.body);
