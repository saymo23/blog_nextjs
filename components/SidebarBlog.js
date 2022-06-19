import React, { Component } from 'react'

export class SidebarBlog extends Component {
  render() {
    return (
      <div className='flex justify-center'>
        <img className='w-1/2 rounded-full' src='/me.jpg' />
        <div className='w-1/2 mx-4 my-12'>
          <h1 className='text-xl'> Daniel Santarriaga </h1>
          <span className='text-sm'>Developer Web</span>
        </div>
      </div>
    )
  }
}

export default SidebarBlog