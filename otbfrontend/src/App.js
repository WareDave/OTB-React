import React, { Component } from 'react'
import M from "materialize-css"; 
import LoginRegisterForm from './LoginRegisterForm'
import StockContainer from './stockContainer'
import EstockContainer from './EstockContainer'
// import Header from './Header'
import { Route, Switch, Link } from 'react-router-dom'
import './App.css'


const $ = window.$;
M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {hover: true});
});

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
            <div class="nav-wrapper blue darken 4">
            <a class='dropdown-trigger fas fa-dice-d20 fa-4x black-text' href='/' data-target='dropdown1'>Vender Tool</a>
            <ul id='dropdown1' class='dropdown-content center'>
              <Link to='/'>home</Link>
              <Link to='/stocks'>New Items</Link>
            </ul>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
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
            exact path="/Estocks"
            render={(props) =>
              <EstockContainer {...props}
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