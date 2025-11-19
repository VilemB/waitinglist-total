export interface WaitlistSubscribeRequest {
  name: string
  email: string
}

export interface WaitlistSubscribeResponse {
  success: boolean
  message: string
  is_existing?: boolean
}

export const subscribeToWaitlist = async (
  payload: WaitlistSubscribeRequest,
): Promise<WaitlistSubscribeResponse> => {
  const response = await fetch('/api/proxy/contact/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorBody = await response
      .json()
      .catch(() => ({ detail: 'Something went wrong while subscribing. Please try again later.' }))
    const detail =
      typeof errorBody === 'object' && errorBody !== null && 'detail' in errorBody
        ? (errorBody as { detail: string }).detail
        : 'Something went wrong while subscribing. Please try again later.'
    throw new Error(detail)
  }

  const text = await response.text()
  if (!text) {
    return { success: true, message: 'You are on the waitlist!' }
  }

  try {
    return JSON.parse(text) as WaitlistSubscribeResponse
  } catch {
    return { success: true, message: text }
  }
}
