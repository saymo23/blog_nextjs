import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header className='w-full flex items-center h-auto mr-8'>
        <nav className='w-full flex flex-row items-center list-none '>
          <li >
            <a href="#">Portfolio</a>
          </li>
          <li >
            <a href="#">Blog</a>
          </li>
        </nav>
      </header>
    )
  }
}

export default Header