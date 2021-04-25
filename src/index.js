import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NotFoundPage from './pages/404Page.component'
import UserInfoPage from './pages/userInfoPage';
import AccountInfoPage from './pages/accountInfoDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/users/:id' component={UserInfoPage} />
      <Route exact path='/users/:userid/accounts/:accountid' component={AccountInfoPage} />
      <Route path='*' exact={true} component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();