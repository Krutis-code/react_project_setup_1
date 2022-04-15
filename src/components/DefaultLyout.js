import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const DefaultLyout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}

const Public = () => <div>public</div>;
const Private = () => <div>private</div>;

export default DefaultLyout