import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a date string into a human-readable relative time string
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()

  const diffMs = Math.abs(now.getTime() - date.getTime())

  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffWeeks = Math.floor(diffDays / 7)
  const diffMonths = Math.floor(diffDays / 30)
  const diffYears = Math.floor(diffDays / 365)

  if (diffMinutes < 60) {
    return `${diffMinutes}${diffMinutes === 1 ? 'min' : 'mins'}`
  } else if (diffHours < 24) {
    return `${diffHours}${diffHours === 1 ? 'hr' : 'hrs'}`
  } else if (diffDays < 7) {
    return `${diffDays}d`
  } else if (diffWeeks < 4) {
    return `${diffWeeks}${diffWeeks === 1 ? 'wk' : 'wks'}`
  } else if (diffMonths < 12) {
    return `${diffMonths}${diffMonths === 1 ? 'mth' : 'mths'}`
  } else {
    return `${diffYears}${diffYears === 1 ? 'yr' : 'yrs'}`
  }
}
