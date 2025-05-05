import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'
import { Button } from '~/components/ui/button'
import { Icon } from '~/components/ui/icon'

export const Route = createRootRoute({
  component: () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
  const { authenticated, user, login, logout } = usePrivy()
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setSidebarOpen((open) => !open)}
              aria-label="Toggle sidebar"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="font-bold text-lg text-[#1E9BB9]">Solana Agent Kit</span>
          </div>
          <div className="flex items-center gap-2">
            {!authenticated ? (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => login()}
                className="flex items-center gap-1"
              >
                <Icon name="wallet-linear" className="w-4 h-4" />
                Connect Wallet
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {user.wallet?.address.slice(0, 4)}...{user.wallet?.address.slice(-4)}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => logout()}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon name="logout-linear" className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </header>
        <div className="flex flex-1 min-h-0">
          {/* Sidebar Navigation */}
          <aside className={`transition-all duration-300 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 ${sidebarOpen ? 'w-56' : 'w-0 md:w-24'} overflow-hidden`}> 
            <nav className="flex flex-col gap-2 p-4">
              <a href="/" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">Dashboard</a>
              <a href="/chat" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">Chat</a>
              <a href="/wallet" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">Wallet</a>
              <a href="/tokens" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">Tokens</a>
              <a href="/nfts" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">NFTs</a>
              <a href="/defi" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">DeFi</a>
              <a href="/agent" className="py-2 px-3 rounded hover:bg-[#1E9BB9]/10 font-medium">Agent</a>
            </nav>
          </aside>
          {/* Main Content */}
          <main className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#18181b]">
            <Outlet />
          </main>
        </div>
        <TanStackRouterDevtools />
      </div>
    )
  },
})