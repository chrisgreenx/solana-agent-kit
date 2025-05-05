import { createRouter } from '@tanstack/react-router'
import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'
import { Route as chatRoute } from './routes/chat'
import { Route as walletRoute } from './routes/wallet'
import { Route as tokensRoute } from './routes/tokens'
import { Route as nftsRoute } from './routes/nfts'
import { Route as defiRoute } from './routes/defi'
import { Route as agentRoute } from './routes/agent'

// Create the route tree using the routes
const routeTree = rootRoute.addChildren([
  indexRoute,
  chatRoute,
  walletRoute,
  tokensRoute,
  nftsRoute,
  defiRoute,
  agentRoute,
])

// Create the router using the route tree
export const router = createRouter({ routeTree })

// Register the router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}