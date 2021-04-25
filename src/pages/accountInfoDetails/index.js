import React, { useEffect, useState } from 'react'
import { Container, ButtonsContainer, Button} from './style'
import api from '../../API/api'
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import Table from '../../components/table'
function AccountInfoPage(props) {
    const { accountid, userid } = useParams();

    const [account, setAccount] = useState({});
    const [user, setUser] = useState({});
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [form,setForm] = useState(null);
    const [amount,setAmount] = useState(0);
    const [toAccount,setToAccount] = useState('');
    const [update,setUpdate] = useState('');
    const [error,setError] = useState('');

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const responseAccount = await api.get(`/accounts/${accountid}`);
            const responseUser = await api.get(`/users/${userid}`);
            const responseTransactions = await api.get(`/accounts/${accountid}/transactions`);
            setAccount(responseAccount.data);
            setUser(responseUser.data);
            setTransactions(responseTransactions.data);

            setIsLoading(false);

        }
        getData();
    }, [update,accountid,userid]);


    const renderForm = () =>{
        let submitAction;
        switch(form){
            case 'deposit':
            case 'credit':
            case 'withdraw':
                submitAction = async () =>{
                    try{
                        const response = await api.patch(`/accounts/${accountid}/${form}`,{amount});
                        setAmount(0);
                        setForm(null);
                        setError('');
                        setUpdate(response);
                    }
                    catch(e){
                        setError(e.response.data.error);
                    }
                    
                }
                return <div className="">
                    <p>{error}</p>
                    <label htmlFor="amount">{form} amount:</label>
                    <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" name="amount" id="amount"/>
                    <button onClick={submitAction}>submit</button>
                </div> 
            case 'transfer':
                submitAction = async () =>{
                    try{
                        const response = await api.post(`/transfer/${accountid}/${toAccount}`,{amount});
                        setAmount(0);
                        setToAccount('');
                        setForm(null);
                        setUpdate(response);
                        setError('');
                    }
                    catch(e){
                        setError(e.response.data.error);
                    }
                }
                return <div className="">
                    <p>{error}</p>
                    <label htmlFor="amount">{form} amount:</label>
                    <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" name="amount" id="amount"/>
                    <label htmlFor="to">to:</label>
                    <input onChange={(e) => setToAccount(e.target.value)} value={toAccount} type="text" name="to" id="to"/>
                    <button onClick={submitAction}>submit</button>
                </div> 
            default:
                return;
        }
    } 

    if (isLoading)
        return <div className="">loading...</div>
    else return (
        <Container>
            <div>User ID: {user.user._id}</div>
            <div>Name: {user.user.name}</div>
            <div>Passport Id: {user.user.passportId}</div>
            <br/>
            <div>Account Id: {account._id}</div>
            <div>Cash: {account.cash}</div>
            <div>Credit: {account.credit}</div>
      
            <Table columns={['Transaction Id', 'Action', 'Amount']} data={transactions.map(transaction =>[transaction._id,transaction.actionType,transaction.amount])}></Table>
            <ButtonsContainer>
                <Button onClick={() => setForm('deposit')}>Deposit</Button>
                <Button onClick={() => setForm('withdraw')}>Withdraw</Button>
                <Button onClick={() => setForm('transfer')}>Transfer</Button>
                <Button onClick={() => setForm('credit')}>Update Credit</Button>
            </ButtonsContainer> 

          {renderForm()}
            
        </Container>
    );
}

export default AccountInfoPage;
