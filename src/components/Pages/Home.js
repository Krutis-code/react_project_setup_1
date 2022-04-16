import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { userlogout } from '../../redux/actios/UserActions';
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userlogout());
    navigate('/')
  }
  return (
    <>
      <div>Welcome Home Kruti</div>
      <Button onClick={() => logout()}>Logout </Button>
    </>
  )
}

export default Home