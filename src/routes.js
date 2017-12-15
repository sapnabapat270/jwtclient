import React from 'react';
import {Route,IndexRoute} from 'react-router';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import Register from './components/register/register';


export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Dashboard}/>
    <Route path="register" component={Register}/>
  </Route>
);
