import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { useEffect } from 'react'
import About from './Pages/About'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
const DefaultLyout = () => {

    function PrivateRoute({ children}) {
        console.log("child ",children);
        // let navigate = useNavigate()
        const token = useSelector((state)=> state.userReducer.token)
        console.log("Whole state@##############################################",useSelector((state)=>state.userReducer))
        console.log("tokennnn.........",token);
       
        return token!=="" || token===undefined  ? children : <Navigate to="/"></Navigate>;
      }
    return (
        <div>
            <BrowserRouter >
                <Routes >
                    <Route path="/" element={<Login />} />
                    {/* <Route path="/home" element={<Home />} /> */}
                    <Route path="/home" element={ <PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/about" element={ <PrivateRoute><About /></PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default DefaultLyout