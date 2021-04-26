import React, { useEffect, useState } from 'react'
import { Container, Label} from './style'
import api from '../../API/api'
import { Link, useParams } from "react-router-dom";
import Table from '../../components/table'
import axios from 'axios'
import UserService from "../../services/user.service";

function UserInfoPage(props) {
    const [user, setUser] = useState({});
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const userData = (await UserService.getUserData()).data
            const userAccounts = await UserService.getUserAccounts()
            setAccounts(userAccounts.data)

            setUser(userData)
            setIsLoading(false);
        }
        getData();
    }, [])


    if (isLoading)
        return <div className="">loading...</div>

    else return (
        <Container>
            <div><Label>User ID:</Label> {user._id}</div>
            <div><Label>Name:</Label> {user.name}</div>
            <div><Label>Passport Id:</Label> {user.passportId}</div>
            
            <Table 
                columns={['Account ID','Cash','Credit','']} 
                data={accounts.map((d) => [d._id,d.cash,d.credit,<Link to={`${props.location.pathname}/accounts/${d._id}`}>Details</Link>])}>
            </Table>
        </Container>
    );
}

export default UserInfoPage;
