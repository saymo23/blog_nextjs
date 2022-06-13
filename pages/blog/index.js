import React from 'react'

import Image from 'next/image'
import Head from 'next/head'
import Link from "next/link"

import styles from '../../styles/Home.module.css'
import { getAllArticles } from '/lib/mdx'
import dayjs from 'dayjs'

export default function BlogPage({ posts }) {
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='w-8/12 mx-auto'>
        {posts.map((frontMatter) => {
          return (
            <Link href={`/blog/${frontMatter.slug}`} passHref key={frontMatter.title}
              
            >
              <div className='p-4 shadow-lg mb-4 cursor-pointer'>
                <h1 className="title text-xl">{frontMatter.title}</h1>
                <p className="summary">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  {frontMatter.readingTime}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()

  articles
    .map((article) => article.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return {
    props: {
      posts: articles.reverse(),
    },
  }
}

