import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
  render() {
    return (
        <header>
            <ul>
                <li><a className="both_button_menu" href="/search.html">Search<img className="icon_menu" src="assets/icons/search.png" alt="search"/></a></li>
                <li><a href="/about.html"><img className="icon_menu" src="assets/icons/about.png" alt="about"/></a></li>
                <div className="line-1"></div>
                <li><a  href="/"><img className="icon_menu" id="logo" src="assets/images/logo.svg" alt="logo"/></a></li>
                <div className="line-1"></div>
                <li><a href="/shoppingbag.html"><img className="icon_menu" src="assets/icons/shop_bag.png" alt="cart"/></a></li>
                <li><a className="both_button_menu" href="/login.html"><img className="icon_menu" src="assets/icons/user.png" alt="account"/>Log in</a></li>
            </ul>
        </header>
    )
  }
}

export default Header