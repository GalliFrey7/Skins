import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Items from '../components/Items'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders:[],
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
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
        <main>
          <Header orders={this.state.orders}/>
          <div className='presentation'></div>
          <h1>Featured Products</h1>
          <Items items={this.state.items} onAdd={this.addToOrder}/>
          <Footer/>
        </main>
    )
  }

  addToOrder(item) {
    this.setState({orders: [...this.state.orders, item] })
  }
}

export default Main;
