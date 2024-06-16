import React from 'react'
import prisma from '@/db'
import Link from 'next/link';
import {createpost} from '@/actions/submitaction';

async function Blog() {
  const posts = await prisma.posts.findMany();
  // {posts.map((post) => {
  //   console.log(post.content);
  // }

  // )}
  return (
    <>
    <div className='flex flex-col justify-center items-center w-screen h-[60vh]'>
      <h1 className='font-bold text-5xl mt-10'>All the Blogs are here</h1>
      <div className="blogs mt-32">

        <ol className="list-decimal list-inside space-y-2">
          


          {posts.map((post) => (
            <li
            
            
            key={post.id}
            ><Link 
            className='font-bold text-xl text-fuchsia-600'
            href={`/posts/${post.slug}`}>{post.title}</Link> 
              </li>
          ))}



        </ol>
      </div>

     </div>
     <div className='w-screen h-[50vh] flex justify-center text-black'>


     {/* Here i will be having a form */}
     <form action={createpost}
     className='flex flex-col gap-y-2 w-[400px]'
     >
      <input type="text" 
      placeholder='Enter the Title'
      name='title'
      className='px-2 py-1 rounded-sm'
      />
      <textarea rows="5" 
      placeholder='Enter the Content'
      name='content'
      className='px-2 py-1 rounded-sm'
      />
      <button
      type='submit'
      className='bg-blue-600 rounded-sm text-white px-2 py-2'
      >
        Create Post
      </button>


     </form>
     </div>



        </>
  )
}

export default Blog
