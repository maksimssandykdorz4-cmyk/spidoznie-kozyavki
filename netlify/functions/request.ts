import { prisma } from "../../lib/prisma";
export const handler = async () => {
  // Create a new user with a post
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      password: 'fsdfsdfsd'
      },
    },
)
}  // Fetch all users with their posts

await prisma.$disconnect()