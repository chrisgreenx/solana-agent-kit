import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrivyProvider } from '@privy-io/react-auth';
import './index.css'
import App from './App.tsx'

// Ensure environment variable is handled correctly
const privyAppId = import.meta.env.VITE_PRIVY_APP_ID;
if (!privyAppId) {
  throw new Error('VITE_PRIVY_APP_ID is not set in .env file');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivyProvider
      appId={privyAppId}
      config={{
        // Customize Privy's appearance and behavior
        loginMethods: ['email', 'wallet', 'google', 'github'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: 'YOUR_LOGO_URL', // Optional: Add your app's logo URL
        },
        // Configure embedded wallets
        embeddedWallets: {
          createOnLogin: 'users-without-wallets', // or 'all-users'
          noPromptOnSignature: false, // users will be prompted to sign
        },
      }}
    >
      <App />
    </PrivyProvider>
  </StrictMode>,
)
