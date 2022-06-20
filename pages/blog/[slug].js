
import dayjs from 'dayjs'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'

import { remarkCodeHike } from "@code-hike/mdx"
import "@code-hike/mdx/dist/index.css"
import theme from "shiki/themes/monokai.json"
import { CH } from "@code-hike/mdx/components"

import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getSlug, getArticleFromSlug } from '../../lib/mdx'
import Colibri from '../../components/Colibri'
import Header from '../../components/Header'
import SidebarBlog from '../../components/SidebarBlog'


//import { SectionTitle, Text } from '../../data/components/mdx-components'

export default function Blog({ post: { source, frontmatter } }) {
  return (
    <React.Fragment>
      <Head>
        <title>{frontmatter.title} | Daniel Santarriaga - Blog</title>
        <meta name='description' content={frontmatter.excerpt}></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className='container mx-auto flex justify-center flex-wrap'>
        <div className="top w-full flex">
          <Colibri />
          <Header />
        </div>
        <div className="flex gap-4">
          <div className='w-full lg:w-9/12 '>
            <h1 className="article-title text-3xl">{frontmatter.title}</h1>
            <p className="publish-date mb-6">
              {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
              {frontmatter.readingTime}
            </p>
            <div className="content">
              <MDXRemote {...source} components={{ Image, CH }} />
            </div>
          </div>
          <div className='w-3/12 hidden lg:flex'>
            <SidebarBlog />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  //fetch the particular file based on the slug
  const { slug } = params
  const { content, frontmatter } = await getArticleFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[remarkCodeHike, { autoImport: false, theme }]],
      useDynamicImport: true,
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeCodeTitles,
      ],
    },
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  }
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}