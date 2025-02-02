import React from 'react'
const Header = () => {
  return (
    <header>

    <nav>
    <div id="left">
      <span id="logo-hdr" className='font-bold text-xl'>Logo</span>
    </div>
    <div id="right">
    <a href="/" className="p-10">
            Home
          </a>
    <a href="#" className='p-10'>
      Products
    </a>
    </div>
    </nav>
    <hr />
    </header>
  )
}

export default Header