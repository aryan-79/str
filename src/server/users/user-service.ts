import { createServerFn } from '@tanstack/react-start';
import z from 'zod';
import { UserCreateSchema } from '@/lib/schema/auth-schema.ts';
import { prisma } from '@/server/db.ts';

const paginationSchema = z.object({
  page: z.number(),
  limit: z.number(),
});

export const getUsers = createServerFn({ method: 'GET' })
  .inputValidator(paginationSchema)
  .handler(async ({ data }) => {
    const { page, limit } = data;

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return {
      pagination: {
        page,
        limit,
      },
      data: [
        {
          name: 'user1',
          age: 20,
        },
        {
          name: 'user2',
          age: 30,
        },
      ],
    };
  });

export const createUser = createServerFn({ method: 'POST' })
  .inputValidator(UserCreateSchema)
  .handler(async ({ data }) => {
    const { email, fullName, password } = data;

    console.log(`User created with name: ${fullName} and email: ${email}`);

    const res = await prisma.user.create({
      data: {
        email,
        fullName,
        password,
      },
    });

    return res;
  });
