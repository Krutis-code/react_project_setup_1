import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();

  return (
      <>
    <div>Welcome Home Kruti</div>
    <Button onClick={()=>navigate('/')}>Logout </Button>
      </>
  )
}

export default Home