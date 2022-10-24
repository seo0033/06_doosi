import React from 'react'
import { Link } from 'react-router-dom'
import { NavMenu_L, NavMenu_R } from '../components/NavMenu'
import '../css/basic.scss'

const Header = () => {
  return (
    <header className='Header'>
      <div className="top">
        <ul>
          <li>LOGIN</li>
          <li>JOIN</li>
          <li>CART</li>
        </ul>
      </div>
      <div className='line'></div>
      <div className='line'></div>
      <div className="inner">
        <nav>
          <NavMenu_L />
        </nav>
        <h1>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" />
          </Link>
        </h1>
        <nav>
          <NavMenu_R />
        </nav>
      </div>
      <div className='line'></div>
      <div className='line last'></div>
    </header>
  )
}

export default Header