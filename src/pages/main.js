import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Items from '../components/Items'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 2,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 3,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 4,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 5,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 6,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 7,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        },
        {
          id: 8,
          title: 'T-shirt',
          img: 't1.jpg',
          price: '49,99'
        }
      ]
    }
  }
  render() {
    return (
        <main>
          <Header />
          <div className='presentation'></div>
          <h1>Featured Products</h1>
          <Items items={this.state.items} />
          <Footer/>
        </main>
    )
  }
}

export default Main;
