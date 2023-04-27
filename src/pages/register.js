import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class register extends Component {
  render() {
    return (
      <register>
        <Header />

        <div className="container">
          <form>
            <label htmlFor="username">Имя пользователя:</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="email">Электронная почта:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Пароль:</label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="Зарегистрироваться" />
          </form>
        </div>

        <Footer/>
      </register>
    )
  }
}
