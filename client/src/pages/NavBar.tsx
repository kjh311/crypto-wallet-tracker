import React from 'react'

const NavBar = () => {
  return (
    <div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <a href="/hello">Hello</a>
      </li>
      <li style={{ display: 'inline', marginRight: '10px' }}>
        <a href="/">Home</a>
      </li>
    </ul>
  </div>
  
  )
}

export default NavBar;