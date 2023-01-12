import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import {loopPosts} from '../services';


const PostCard = ( {post} ) => {
  // const [loopPostCards, setLoopPostCards] = useState([]);

  // useEffect(() => {
  //   loopPosts()
  //     .then((newPostCards) => setLoopPostCards(newPostCards))
  // }, []);
  return (
    <section id="top-companies">
      
      <div
        id="top-companies__items"
        className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:grid-cols-1 m-4"
      >
        <Link href={`/post/${post.slug}`}>
          <span className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
            <div className="relative block overflow-hidden ">
              <img
                src={post.featuredImage.url}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-200 group-hover:scale-[102%]"
              />
            </div>
            
            <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
              <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg border shadow-sm dark:border-slate-600">
                <img
                  src={post.author.photo.url} 
                  layout="fill"
                  objectFit="cover"
                />                  
              </span>

              <h5 className="block truncate text-xl font-semibold capitalize">
                {post.title}
              </h5>

              <div className="mt-5 flex items-center mb-8 w-full inline truncate text-slate-500 dark:text-slate-400">
                <img className='mr-2' src={post.author.photo.url} alt="man image" width={20}/> 
                <span className="text-left mr-1">
                  {post.author.name}
                </span>
                  <img className='mr-2' src="../img/calendar.png" alt="calendar image" width={20}/> 
                <span className="text-right">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
          </span>
        </Link>
      </div>
    </section>

  //   <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
  //   {/* <div className="relative shadow-md inline-block w-full h-60 lg:h-80 mb-6">
  //     <Image
  //       unoptimized
  //       loader={grpahCMSImageLoader}
  //       alt={post.title}
  //       className="shadow-lg rounded-t-lg lg:rounded-lg"
  //       layout="fill"
  //       src={post.featuredImage.url}
  //     />
  //   </div> */}
  //   <div className="relative overflow-hidden shadow-md pb-80 mb-6">
  //     <img src={post.featuredImage.url} alt="" className="object-top absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
  //   </div>

  //   <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
  //     <Link href={`/post/${post.slug}`}>{post.title}</Link>
  //   </h1>
  //   <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
  //     <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
  //     <img src={post.author.photo.url} alt={post.author.name}
  //         height="30px"
  //         width="30px"
  //         className="align-middle rounded-full" />
  //       {/* <Image
  //         unoptimized
  //         loader={grpahCMSImageLoader}
  //         alt={post.author.name}
  //         height="30px"
  //         width="30px"
  //         className="align-middle rounded-full"
  //         src={post.author.photo.url}
  //       /> */}
  //       <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
  //     </div>
  //     <div className="font-medium text-gray-700">
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  //       </svg>
  //       <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
  //     </div>
  //   </div>
  //   {/* <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
  //     {post.excerpt}
  //   </p> */}
  //   <div className="text-center">
  //     <Link href={`/post/${post.slug}`}>
  //       <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
  //     </Link>
  //   </div>
  // </div>
  )
}

export default PostCard