import React, { Component } from 'react'

export class SidebarBlog extends Component {
  render() {
    return (
      <div className='flex flex-col '>
        <div className='flex mb-4'>
          <img className='img_face ' src='/me.jpg' />
          <div className='w-1/2 mx-4 my-8'>
            <h1 className='text-xl'> Daniel Santarriaga </h1>
            <span className='text-sm'>Developer Web</span>
          </div>
        </div>
        <div className="description ">
          <p>
            Nací en México y desarrollo para web desde hace más de 10 años. Con este blog quiero desarrollar habilidades como la escritura y el inglés. 
          </p>
          <p>
            Quiero exponer muchas cosas, desde desarrollo web, hobbies y gustos como Pokemon, la industria de los videojuegos entre otras cosas.
          </p>
          <p>
            My problem is start to projects. Im Sr Developer in MEXICONOW and I create a form to work, but in personal projects I stucks because need more knowledge or more time. I try to focus more in this little project, this blog, for create my a habit.
          </p>
        </div>
      </div>
    )
  }
}

export default SidebarBlog