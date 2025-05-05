import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { usePrivy } from '@privy-io/react-auth'

export const Route = createFileRoute('/chat')({ 
  component: ChatPage
})

function ChatPage() {
  const { authenticated } = usePrivy()
  const [messages, setMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([])
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const newMessages = [...messages, { role: 'user', content: input }]
    setMessages(newMessages)
    setInput('')

    // In a real implementation, this would call the Solana Agent Kit API
    // For now, we'll just simulate a response
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: 'This is a placeholder response. In a complete implementation, this would use the Solana Agent Kit to process your request.'
      }])
    }, 1000)
  }

  if (!authenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Authentication Required</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Please connect your wallet to access the chat feature.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-xl font-semibold mb-2">Chat with your Solana Agent</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md">
              Ask questions about Solana, manage your wallet, or perform blockchain operations using natural language.
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-3/4 p-3 rounded-lg ${
                  message.role === 'user' 
                    ? 'bg-[#1E9BB9] text-white' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-[#1E9BB9] text-white rounded-lg hover:bg-[#1E9BB9]/90"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}