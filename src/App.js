import React, { useEffect, useState } from 'react';
import api from "./API/api";
import UserListItem from './components/UserListItem';
import './App.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signup'
import UserInfoPage from './pages/userInfoPage'
import AccountInfoPage from './pages/accountInfoDetails'
import NotFoundPage from './pages/404Page.component'

function App() {
  // const [users,setUsers] = useState([]);
  // const [userAuthenticated,setUserAuthenticated] = useState([]);

  // useEffect(() => {
  //   const getData = async () =>{
  //     const responseUser = await api.get("/users/me",{
  //       headers: {
  //         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg2ODBiOWE2YWNjYTMyMThmMWU2NjIiLCJpYXQiOjE2MTk0MzAyODl9.MEQueMUZtZz8DZQRjzwlDJIPqXrqW4irIvuKLg2Nd7A'
  //       }
  //     });
  //     console.log(responseUser.data);
  //     setUserAuthenticated(responseUser.data)

  //     const response = await api.get("/users");
  //     console.log(response.data);
  //     setUsers(response.data);
  //   }
  //   getData();
  // },[])
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path='/users/:id' component={UserInfoPage} />
        <Route exact path='/users/:userid/accounts/:accountid' component={AccountInfoPage} />
        <Route path='*' exact={true} component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
