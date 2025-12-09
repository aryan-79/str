import { createFileRoute } from '@tanstack/react-router';
import { getUsers } from '@/server/users';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    const queryClient = context.queryClient;
    const data = await queryClient.ensureQueryData({
      queryKey: ['users'],
      queryFn: async () =>
        await getUsers({
          data: {
            page: 0,
            limit: 10,
          },
        }),
    });

    return data;
  },
  component: App,
});

function App() {
  const data = Route.useLoaderData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
