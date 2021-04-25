import React, { useEffect, useState } from 'react'
import { Container, Label} from './style'
import api from '../../API/api'
import { Link, useParams } from "react-router-dom";
import Table from '../../components/table'
import axios from 'axios'

function UserInfoPage(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const response = await api.get(`/users/${id}`);
            setData(response.data);
            setIsLoading(false);
        }
        getData();
    }, [])


    if (isLoading)
        return <div className="">loading...</div>

    else return (
        <Container>
            <div><Label>User ID:</Label> {data.user._id}</div>
            <div><Label>Name:</Label> {data.user.name}</div>
            <div><Label>Passport Id:</Label> {data.user.passportId}</div>
            
            <Table 
                columns={['Account ID','Cash','Credit','']} 
                data={data.accounts.map((d) => [d._id,d.cash,d.credit,<Link to={`${props.location.pathname}/accounts/${d._id}`}>Details</Link>])}>
            </Table>
        </Container>
    );
}

export default UserInfoPage;
