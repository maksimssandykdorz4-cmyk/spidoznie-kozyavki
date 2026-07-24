import { prisma } from "../../lib/prisma";
async function main() {
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

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
