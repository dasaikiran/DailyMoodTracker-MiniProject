import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    errorMsg: '',
    isError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMsg,
      isError: true,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onUsernameChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onPasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickCheckbox = event => {
    if (event.target.checked) {
      this.setState({
        passwordType: 'text',
      })
    } else {
      this.setState({
        passwordType: 'password',
      })
    }
  }

  render() {
    const {username, password, passwordType, errorMsg, isError} = this.state
    const jwtToken= Cookies.get('jwt_token')
    if(jwtToken!==undefined){
      return <Redirect to="/" />
    }
    return (
      <div className="bg-login-container">
        <div className="login-container">
          <h1 className="login-heading">Daily Mood Tracker</h1>
          <form className="form" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label className="label" htmlFor="username-input">
                USERNAME
              </label>
              <input
                className="input"
                value={username}
                id="username-input"
                onChange={this.onUsernameChange}
                type="text"
              />
            </div>
            <div className="input-container">
              <label className="label" htmlFor="password-input">
                PASSWORD
              </label>
              <input
                className="input"
                value={password}
                id="password-input"
                onChange={this.onPasswordChange}
                type={`${passwordType}`}
              />
            </div>
            <div className="checkbox-container">
              <input
                className="checkbox-inputs"
                id="checkbox-input"
                onChange={this.onClickCheckbox}
                type="checkbox"
              />
              <label className="checkbox-label" htmlFor="checkbox-input">
                Show Password
              </label>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            {isError ? <p className="error-msg">{`${errorMsg}`}</p> : null}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
