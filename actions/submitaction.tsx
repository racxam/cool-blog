"use server"
import { revalidatePath } from 'next/cache'
import prisma from '../db'

export async function createpost(formData:FormData) {
  try{

    await prisma.posts.create({
      data:{
        title:formData.get("title") as string, 
        slug:(formData.get("title") as string).replace(/\s+/g,"-").toLowerCase(),
        content:formData.get("content") as string,
        author:{
          connect:{
            email:"sumitracxam@gmail.com"
          }
        }
        
      }
    })
    revalidatePath('/')
  }catch(error){
    console.error(error);
    
  }
}
  export async function updatepost(formData:FormData,id:string) {
    await prisma.posts.update({
    where:{id},
    data:{
        title:formData.get("title") as string, 
        slug:(formData.get("title") as string).replace(/\s+/g,"-").toLowerCase(),
        content:formData.get("content") as string,

    }
  })
  revalidatePath('/')
}
export async function deletepost(formData:FormData,id:string) {
  await prisma.posts.delete({
    where:{id}
  })
  revalidatePath('/')
}


