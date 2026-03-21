'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState, ReactNode } from 'react'

export function TanStackQueryProvider({ children }: { children: ReactNode }) {
  // Create a query client instance for each session
  // This prevents sharing data between users and sessions
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Configure global defaults
            staleTime: 1000 * 60 * 5, // 5 minutes
            refetchOnWindowFocus: true,
            retry: 1,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
    </QueryClientProvider>
  )
}
