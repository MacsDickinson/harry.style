import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/harry_sig.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
          <img src={logo} alt="Harry" style={{ marginTop: '20px'}} />
    </div>
  </nav>
)

export default Navbar
