type ApiConfig = {
  BACKEND_URL: string
}

const DEV_BACKEND = 'http://127.0.0.1:8000'

export const getApiConfig = (): ApiConfig => {
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  // Check environment variables first (allows override)
  // In development, fall back to local backend if not set
  // In production, use environment variable (should be set)
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    process.env.BACKEND_URL ||
    (isDevelopment ? DEV_BACKEND : DEV_BACKEND)

  return {
    BACKEND_URL: backendUrl.replace(/\/$/, ''),
  }
}

export const API_CONFIG = getApiConfig()
