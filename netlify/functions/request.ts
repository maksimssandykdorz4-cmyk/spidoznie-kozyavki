/* import { prisma } from "../../lib/prisma";
export const handler = async () => {
  // Create a new user with a post
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      password: 'fsdfsdfsd'
      },
    },
    )};  // Fetch all users with their posts
 */
import { prisma } from "../../lib/prisma";

export const handler = async () => {
  try {
    // Создаём пользователя
    const newUser = await prisma.user.create({
      data: {
        name: "Alice",
        email: "alice@prisma.io",
        password: 'fsdfsdfsd',
      },
    });

    // Возвращаем успешный ответ
    return {
      statusCode: 200,
      body: JSON.stringify(newUser),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  } finally {
    // Закрываем соединение с БД (если нужно)
    await prisma.$disconnect();
  }
};