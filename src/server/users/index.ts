import { createServerFn } from '@tanstack/react-start';
import z from 'zod';

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

const userSchema = z.object({
  email: z.email(),
  name: z.string(),
});

export const createUser = createServerFn({ method: 'POST' })
  .inputValidator(userSchema)
  .handler(async ({ data }) => {
    const { email, name } = data;
    console.log(`User created with name: ${name} and email: ${email}`);

    return {
      data: {
        email,
        name,
      },
    };
  });
