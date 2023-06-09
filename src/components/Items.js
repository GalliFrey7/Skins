import React, { Component } from 'react'
import Item from './Item'
import './css/featured.css'

export class Items extends Component {
  render() {
    return (
      <featured>
        {this.props.items.map(el =>(
            <Item key={el.id } item={el} onAdd={this.props.onAdd} />
        ))}
      </featured>
    )
  }
}

export default Items