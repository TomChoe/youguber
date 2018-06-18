import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Services from './Services';
import EditProfile from './components/EditProfile';
import Home from './components/Home';
import Login from './components/Login';
import Profile from'./components/Profile';
import SignUp from './components/SignUp';
import Youtube from './components/Youtube';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      users: null,
      currentUser: null
    }
  this.signUp = this.signUp.bind(this);
  this.mockLogIn = this.mockLogIn.bind(this);
  }

  componentDidMount() {
    Services.getUsers()
      .then(users => {
        this.setState({ users: users.data })
      })
      .catch(err => {
        console.log('error getting users', err.response)
      })
  }

  signUp(form) {
    Services.signUp(form)
      .then(user => {
        this.setState({ 
          currentUser: user.data,
          loggedIn: true
        })
      })
      .catch(err => {
        console.log('error sign in')
      })
  }

  mockLogIn(userLogin) {
    return this.state.users.map(user => {
      if(userLogin.userName === user.userName && userLogin.passWord === user.passWord) {
        this.setState({ 
          currentUser: user,
          loggedIn: true 
        })
      } else {
        console.log('no user exists!')
      }
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => {
            return <Home user={this.state.currentUser}
                         isLoggedIn={this.state.loggedIn} />
          }} />
          <Route exact path="/signup" component={() => {
            return <SignUp user={this.state.currentUser} 
                           userSignUp={this.signUp}
                           isLoggedIn={this.state.loggedIn} />
          }} />
          <Route exact path="/login" component={() => {
            return <Login user={this.state.currentUser} 
                          userLogIn={this.mockLogIn}
                          isLoggedIn={this.state.loggedIn} />
          }} />
          <Route exact path="/videos" component={() => {
            return <Youtube user={this.state.currentUser}
                            isLoggedIn={this.state.loggedIn} />
          }} />
          <Route exact path="/profile" component={() => {
            return <Profile user={this.state.currentUser}
                            isLoggedIn={this.state.loggedIn} />
          }} />
          <Route exact path="/editprofile" component={() => {
            return <EditProfile user={this.state.currentUser}
                            isLoggedIn={this.state.loggedIn} />                
          }} />
        </Switch>
      </Router>
    );
  }
}