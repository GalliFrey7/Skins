import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

class Main extends React.Component {
  render() {
    return (
        <main>
          <Header />
          <div className='presentation'></div>
          <Carousel/>
          <Footer/>
        </main>
    )
  }
}

export default Main;
