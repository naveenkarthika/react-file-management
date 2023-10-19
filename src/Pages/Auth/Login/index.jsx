import React from 'react';
import LoginForm from '../../../components/AuthComponents/LoginForm';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className="container-fluid">
      <h2 className="display-1 my-5 text-center">Login</h2>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <LoginForm />
          <Link to={'/register'}>Not have an account? Register</Link>
        </div>
      </div>
    </div>
    
  )
}

export default Login