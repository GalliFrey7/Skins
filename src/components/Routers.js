import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Main from '../pages/main'
import RegisterPage from '../pages/register'
import LoginPage from '../pages/Login'

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route element={<Main />} path='/'/>
            <Route element={<RegisterPage/>} path='/register'/>
            <Route element={<LoginPage/>} path='/login'/>
        </Routes>      
      </BrowserRouter>
    )
  }
}
