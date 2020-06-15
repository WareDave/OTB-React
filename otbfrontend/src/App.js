import React, { Component } from 'react'
import LoginRegisterForm from './LoginRegisterForm'
import StockContainer from '/stockCountainer'
// import Header from './Header'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import LegalContainer from './src/legalContainer.js'





class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUserEmail: null
    }
  }

  handledLoggedInStatus = (loggedInUserEmail) => {
    this.setState({
      loggedIn: true,
      loggedInUserEmail: loggedInUserEmail
    })
  }

  logout = async () => {
    var response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

  var parsedLogoutResponse = await response.json()

  if (parsedLogoutResponse.status.code === 200) {
    this.setState({
      loggedIn: false,
      loggedInUserEmail: ''
    })
  } else {
    console.log('Register Failed: ', parsedLogoutResponse)
  }
  }

  render() {
    return (
     
      <main>
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">WareDave</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/App">Home</a></li>
                <li><a href="https://github.com/WareDave">WareDave Github</a></li>
              </ul>
            </div>
          </nav>
       
       
        <Switch>
          <Route
            exact path="/"
            render={(props) => 
              <LoginRegisterForm {...props}
              loggedIn={this.state.loggedIn}
              loggedStatus={this.handledLoggedInStatus}
              />
            }
          />
          <Route
            exact path="/stocks"
            render={(props) => 
              <StockContainer {...props}
              loggedIn={this.state.loggedIn}
              loggedStatus={this.handledLoggedInStatus}
              />
            }
          />
         
          <Route
            exact path="/legals"
            render={(props) =>
              <LegalContainer {...props}
              loggedIn={this.state.loggedIn}
              loggedStatus={this.handledLoggedInStatus}
              />
            }
          />
        </Switch>
       

      </main>
     
    )
  }
}

export default App;