import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  component: Dashboard
})

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Solana Agent Kit Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Welcome to the Solana Agent Kit Web UI. Use the sidebar navigation to explore different features.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard 
          title="Chat" 
          description="Interact with your Solana agent through natural language" 
          link="/chat" 
        />
        <DashboardCard 
          title="Wallet" 
          description="View your wallet balance and transaction history" 
          link="/wallet" 
        />
        <DashboardCard 
          title="Tokens" 
          description="Manage your SPL tokens and token accounts" 
          link="/tokens" 
        />
        <DashboardCard 
          title="NFTs" 
          description="Browse and manage your NFT collection" 
          link="/nfts" 
        />
        <DashboardCard 
          title="DeFi" 
          description="Access DeFi protocols and services" 
          link="/defi" 
        />
        <DashboardCard 
          title="Agent" 
          description="Configure your Solana agent settings" 
          link="/agent" 
        />
      </div>
    </div>
  )
}

function DashboardCard({ title, description, link }: { title: string, description: string, link: string }) {
  return (
    <a 
      href={link}
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#1E9BB9] dark:hover:border-[#1E9BB9] transition-colors"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </a>
  )
}