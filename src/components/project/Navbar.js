import React from 'react'
import { Link } from 'react-router'

const Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-dark bg-inverse">
        <div className="container">
          <Link className="navbar-brand" to="/usage" >EscapeGoat</Link>
          <ul className="nav navbar-nav pull-right">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard" activeClassName="active">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/records" activeClassName="active">履修科目一覧</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" activeClassName="active">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
})

module.exports = Navbar
