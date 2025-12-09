import { createRouter } from '@tanstack/react-router';
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query';
import ErrorBoundary from '@/components/common/error-boundary';
import NotFoundBoundary from '@/components/common/not-found';
import * as TanstackQuery from '@/integrations/tanstack-query/root-provider';
// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
export const getRouter = () => {
  const rqContext = TanstackQuery.getContext();

  const router = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: 'intent',
    defaultErrorComponent: ErrorBoundary,
    defaultNotFoundComponent: NotFoundBoundary,
    Wrap: (props: { children: React.ReactNode }) => {
      return <TanstackQuery.Provider {...rqContext}>{props.children}</TanstackQuery.Provider>;
    },
  });

  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient });

  return router;
};
