import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.js';

const FoodPage = () => (
	<div>
		<h1>Food Page</h1>
	</div>
	);


function App() {
  return (
    <div>
    	<Switch>
		     <Route exact path='/' component={HomePage} />
		     <Route path='/shop/food' component={FoodPage} />
     	</Switch>
    </div>
  );
}

export default App;
