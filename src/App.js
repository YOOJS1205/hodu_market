import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/reset.css';
import './style/app.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
