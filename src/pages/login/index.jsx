import React, { useState } from "react";
import Toast from "../../components/Toast";
import { loginUser } from "../../services/auth";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Login = ({auth}) => {
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleChangeEvent = (value, name) => {
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {status, message} = loginUser(email, password, auth.setAuthenticated);
        if(status === 403){
            Toast(message, {type: 'error'});
            return;
        }
        navigate('/');
        Toast(message, {type: 'success'});
    } 

    return (
        <div className="pt-5">
            <div className="card w-50 mx-auto">
                <div className="card-header text-center">
                    <h4 className="card-title">Login</h4>
                </div>
                <div className="card-body">
                    <div className="container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group my-3">
                                        <label htmlFor='email'>Email:</label>
                                        <input 
                                            type='email' 
                                            onChange={(event) => {handleChangeEvent(event.target.value, 'email')}} 
                                            className="form-control" 
                                            name="email" 
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group my-3">
                                <label htmlFor='password'>Password:</label>
                                <input 
                                    type='password' 
                                    onChange={(event) => {handleChangeEvent(event.target.value, 'password')}}
                                    className="form-control" 
                                    name="password" 
                                    placeholder="****"
                                />
                            </div>

                            <div className="form-group text-center my-3">
                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;