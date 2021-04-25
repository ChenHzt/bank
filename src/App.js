import React, { useEffect, useState } from 'react';
import api from "./API/api";
import UserListItem from './components/UserListItem';
import './App.css'

function App() {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    const getData = async () =>{
      const response = await api.get("/users");
      console.log(response.data);
      setUsers(response.data);
    }
    getData();
  },[])
  return (
    <>
      <h1>Users list:</h1>
      <ul className="container"> 
        {users.map((user) => <li key={user._id}><UserListItem user={user}/></li>)}
      </ul>
      
    </>
  );
}

export default App;
