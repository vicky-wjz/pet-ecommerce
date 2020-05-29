import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shoppage/shoppage.js';
import Header from './components/header/header.js';
import SigninAndRegisterPage from './pages/signin-and-register/signin-and-register.js';
import { auth } from './firebase/firebase.utils.js'


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
     })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
  return (
    <div>
    	<Header currentUser={this.state.currentUser} />
    	<Switch>
		     <Route exact path='/' component={HomePage} />
		     <Route path='/shop' component={ShopPage} />
		     <Route path='/signin' component={SigninAndRegisterPage} />
     	</Switch>
    </div>
  );
}
}

export default App;
