import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/actionCreators/authActionCreators';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [loginForm, setLoginForm] = useState({
        email: null,
        password: null
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setLoginForm((preState) => {
            return Object.assign({}, preState, { [e.target.name]: e.target.value })
        })
    }

    console.log('loginForm', loginForm)

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loginForm && (!loginForm?.email || !loginForm?.password)) {
            alert('Please fill the form');
            return;
        }

        dispatch(signInUser(loginForm?.email, loginForm?.password, navigate))
    }


  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
            <input type="text" name="email" placeholder="Email" className="form-control" value={loginForm?.email} onChange={handleChange} />
        </div>
        <div className="form-group my-2">
            <input type="password" name="password" placeholder="Password" className="form-control" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary my-2 form-control">
            Login
        </button>
    </form>
  )
}

export default LoginForm