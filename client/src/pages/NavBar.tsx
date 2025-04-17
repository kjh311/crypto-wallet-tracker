import React from 'react'
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <Link to="/wallets">Wallets</Link>
      </li>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>
  
  )
}

export default NavBar;