import { SITE_CONFIG, SOCIAL_LINKS } from '@/app/config/constants'

// Format date to readable string
export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Get current year
export const getCurrentYear = (): number => {
  return new Date().getFullYear()
}

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Copy text to clipboard
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (error) {
    console.error('Failed to copy text:', error)
    return false
  }
}

// Smooth scroll to element
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Get social link by platform
export const getSocialLink = (platform: keyof typeof SOCIAL_LINKS): string => {
  return SOCIAL_LINKS[platform].link
}

// Generate meta tags
export const generateMetaTags = (title?: string, description?: string) => {
  return {
    title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
    description: description || SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    author: SITE_CONFIG.author,
    openGraph: {
      title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description: description || SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name,
      description: description || SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
      creator: SITE_CONFIG.twitterHandle,
    },
  }
}
