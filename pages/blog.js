// import type { NextPage } from 'next';
import Head from 'next/head';
// import Image from 'next/image'
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';

// const posts = [
//   { title: 'Microsoft Word', excerpt: 'Learn Microsoft Word' },
//   { title: 'HTML', excerpt: 'Learn HTML' },
// ];

export default function Blog({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>React Blog</title>
        <link rel="icon" href="/circle.jpg" />
      </Head>
      <div className="text-center">
        <h2 className="text-4xl text-center mt-5 font-bold">All Posts</h2>        
      </div>
      <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
          <div className="md:float-left block">
            
          </div>
          <div className="hidden md:float-left md:contents">
            
          </div>
        </div>
      </div>
        
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-6 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-6 col-span-1">
          <div className="lg:sticky relatve top-8">
          <PostWidget />
          <Categories />
          </div>
        </div>
      </div> 
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}
