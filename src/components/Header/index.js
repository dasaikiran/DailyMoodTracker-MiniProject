import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiMenu} from 'react-icons/fi'
import {MdClose} from 'react-icons/md'

import './index.css'

class Header extends Component {
  state = {isMenu: false}

  onMenuClick = () => {
    this.setState(prev => ({isMenu: !prev.isMenu}))
  }

  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {isMenu} = this.state
    return (
      <>
        <nav className="navbar">
          <div className="nav-content-sm">
            <h1 className="nav-heading">Daily Mood Tracker</h1>
            <button
              className="menu-button"
              type="button"
              onClick={this.onMenuClick}
            >
              {isMenu ? (
                <MdClose className="icon" />
              ) : (
                <FiMenu className="icon" />
              )}
            </button>
          </div>
          <div className="nav-content-lg">{}</div>
        </nav>
        {isMenu ? (
          <div className="navbar-menu">
            <ul className="navbar-menu-content">
              <Link className="link" to="/">
                <li className="nav-li">Home</li>
              </Link>
              <Link className="link" to="/">
                <li className="nav-li">Reports</li>
              </Link>
              <li>
                <button
                  type="button"
                  onClick={this.onLogout}
                  className="logout-button"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
