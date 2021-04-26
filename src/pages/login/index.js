import AuthService from '../../services/auth.service'
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";

function Login (props){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [passportId,setPassportId] = useState('');
    const [error,setError] = useState('');

    let history = useHistory();
    const loggedInUser = AuthService.getCurrentUser()
    console.log(history)
    if(loggedInUser)
        history.push(`/users/${loggedInUser.user._id}`);

    const handleLogin = async () =>{
        try{
            const userData = await AuthService.login(email,passportId, password);
            console.log(userData)
            history.push(`/users/${userData.user._id}`);
        }
        catch(error) {
            const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            setError(resMessage)
        }
    }
    return (
        <div>
            {error && <div>{error}</div>}
            <div>
                <label>Email:</label>
                <input value={email} onChange={(e) =>setEmail(e.target.value)} type='text'/>
            </div>
            <div>
                <label>PassportId:</label>
                <input value={passportId} onChange={(e) =>setPassportId(e.target.value)} type='text'/>
            </div>
            <div>
                <label>Password:</label>
                <input value={password} onChange={(e) =>setPassword(e.target.value)} type='password'/>
            </div>
            <button onClick={()=> handleLogin()}>submit</button>
        </div>
    )
}


export default Login;
