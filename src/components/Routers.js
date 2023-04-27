import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Main from '../pages/main'
import Register from '../pages/register'

export default class Routers extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route element={<Main />} path='/'/>
            <Route element={<Register/>} path='/register'/>
        </Routes>      
      </BrowserRouter>
    )
  }
}
