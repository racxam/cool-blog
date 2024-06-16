import { Prisma, PrismaClient } from '@prisma/client'
import { title } from 'process'
const prisma = new PrismaClient()

const initalPosts:Prisma.PostsCreateInput[]=[
    {
        title:"Post 1",
        slug:"Post-1",
        content:"This is only a test content",
        author:{
            connectOrCreate:{
                where:{
                    email:"sumitracxam@gmail.com",

                },
                create:{
                    email:"sumitracxam@gmail.com",
                    hashedPassword:"djflasoi32e32"

                }
            }
        }

    }
]

async function main() {

console.log("Started seeding...");
for(const post of initalPosts){
    const newpost=await prisma.posts.create({
        data:post,
    })
    console.log(`Create the post with id : ${newpost.id}`);
    
}
console.log("Seeding Fininshed!!");





}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })