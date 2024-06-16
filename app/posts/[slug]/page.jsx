import React from 'react'
import prisma from '../../../db'
// import { unstable_cache as cache } from 'next/cache';

// const getCachedPost=cache((slug)=>{
//   return prisma.posts.findUnique({
//     where:{
//       slug
//     }
//   })
// })

async function page({params}) {
console.log(params.slug);

  console.log("hi");
  const post=await prisma.posts.findUnique({
    where:{
      slug:params.slug,
    }
  })

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center mt-10'>
        
      <h1 className='text-3xl font-bold text-center'>{post.title}</h1>
      <p className='text-xl text-center'>{post.content}</p>
    </div>
  )
}

export default page
