import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage, DashboardPage } from './Pages';
import './App.css';
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreators';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(checkIsLoggedIn());
    if(!isAuthenticated) {
      navigate('/');
    }
  }, []);
  

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>

    </>
  )
}

export default App
