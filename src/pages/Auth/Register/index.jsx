import React from 'react';
import RegisterForm from '../../../components/AuthComponents/RegisterForm';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className="container-fluid">
      <h2 className="display-1 my-5 text-center">Register</h2>
      <div className="row">
        <div className="col-md-5 mx-auto mt-5">
          <RegisterForm />
          <Link to={'/login'}>Already have an account? Login</Link>
        </div>
      </div>
    </div>
    
  )
}

export default Register