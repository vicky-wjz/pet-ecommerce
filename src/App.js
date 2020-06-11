import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import './App.css';
import HomePage from './pages/homepage/homepage.component.js';
import ShopPage from './pages/shoppage/shoppage.js';
import Header from './components/header/header.js';
import SigninAndRegisterPage from './pages/signin-and-register/signin-and-register.js';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'


class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
          })   
        }
        this.props.setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubsribeFromAuth();
  }

  render(){
  return (
    <div>
    	<Header />
    	<Switch>
		     <Route exact path='/' component={HomePage} />
		     <Route path='/shop' component={ShopPage} />
		     <Route path='/signin' component={SigninAndRegisterPage} />
     	</Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
