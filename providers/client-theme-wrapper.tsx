'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/providers/theme-provider'

export function ClientThemeWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  // Only render the ThemeProvider after the component is mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}
