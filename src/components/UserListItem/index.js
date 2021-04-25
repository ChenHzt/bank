import React,{useEffect,useState} from 'react'
import {Container,Name} from './style'

function UserListItem(props) {

  return (
    <Container to={`/users/${props.user._id}`}>
        <Name>{props.user.name}</Name>
    </Container>
  );
}

export default UserListItem;
