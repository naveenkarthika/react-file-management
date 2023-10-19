import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../redux/actionCreators/authActionCreators';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {
    const [registerFormDetails, setRegisterFormDetails] = useState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setRegisterFormDetails((preState) => {
            return Object.assign({}, preState, { [e.target.name]: e.target.value })
        })
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        if(registerFormDetails && (!registerFormDetails?.name || !registerFormDetails?.email || !registerFormDetails?.password || !registerFormDetails?.confirmPassword)) {
            alert("Please fill all fields");
            return;
        }

        if(registerFormDetails && (registerFormDetails?.password !== registerFormDetails?.confirmPassword)) {
            alert("Password doesn't match");
            return;
        }

        dispatch(signUpUser(registerFormDetails?.name, registerFormDetails?.email, registerFormDetails?.password, navigate));
        
    }

  return (
    <form onSubmit={handleSumbit}>
        <div className="form-group my-2">
            <input type="text" name="name" placeholder="Name" className="form-control" value={registerFormDetails?.name} onChange={handleChange} />
        </div>
        <div className="form-group my-2">
            <input type="text" name="email" placeholder="Email" className="form-control" value={registerFormDetails?.email} onChange={handleChange} />
        </div>
        <div className="form-group my-2">
            <input type="password" name="password" placeholder="Password" className="form-control" value={registerFormDetails?.password} onChange={handleChange} />
        </div>
        <div className="form-group my-2">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="form-control" value={registerFormDetails?.confirmPassword} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary my-2 form-control">
            Register
        </button>
    </form>
  )
}

export default RegisterForm