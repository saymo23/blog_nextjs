import React from 'react'

import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link"

import styles from '../../styles/Home.module.css'
import { getAllArticles } from '/lib/mdx'

import SidebarBlog from '../../components/SidebarBlog'
import Header from '../../components/Header'
import Colibri from '../../components/Colibri'

const optionDate = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function BlogPage({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='container  mx-auto flex justify-center flex-wrap'>
        <div className="top w-full flex">
          <Colibri />
          <Header/>
        </div>
        <div className="flex gap-4">
          <div className='w-full lg:w-9/12 '>
            <h1 className='text-4xl text-center'>
              My Blog
            </h1>
            <div className='text-2xl text-center'>
              Last Post
            </div>
            {posts.map((frontMatter) => {
              return (
                <Link href={`/blog/${frontMatter.slug}`} passHref key={frontMatter.title} >
                  <div className='p-4 shadow-lg mb-4 cursor-pointer '>
                    
                    <div className="flex ">
                      <div className='img_list_blog w-5/12'>
                        <img src={frontMatter.image} alt={frontMatter.imageAlt} />
                      </div>
                      <div className="w-7/12 ml-4">
                        <h2 className="title text-2xl">{frontMatter.title}</h2>
                        <p className="date">
                          {new Date(frontMatter.publishedAt).toLocaleDateString('es-MX', optionDate)} &mdash;{' '}
                          {frontMatter.readingTime}
                        </p>
                        <p className="summary">{frontMatter.excerpt}</p>
                        
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className='w-3/12 hidden lg:flex'>
            <SidebarBlog />
          </div>
        </div>
        
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()
  
  articles.sort((a,b) => {
    const aDate = Date.parse(a.publishedAt)
    const bDate = Date.parse(b.publishedAt)

    if (aDate > bDate) return 1
    if (aDate < bDate) return -1

    return 0
  })
  

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}

