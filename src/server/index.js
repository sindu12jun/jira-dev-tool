import { setupWorker } from 'msw'
import { handlers } from './handlers'

export const startServer = () => {
  const server = setupWorker(...handlers);
  server.start({
    quiet: true,
    serviceWorker: {
      url: "/" + "mockServiceWorker.js",
    },
  });
};
