import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './style/reset.css';
import './style/app.css';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
