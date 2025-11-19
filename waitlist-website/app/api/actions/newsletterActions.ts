import { z } from 'zod'

export interface WaitlistSubscribeRequest {
  name: string
  email: string
}

export interface WaitlistSubscribeResponse {
  success: boolean
  message: string
  is_existing?: boolean
}

const subscribeSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
})

export const subscribeToWaitlist = async (
  payload: WaitlistSubscribeRequest,
): Promise<WaitlistSubscribeResponse> => {
  // 1. Validate input
  const validationResult = subscribeSchema.safeParse(payload)
  if (!validationResult.success) {
    const errorMessage = validationResult.error.errors.map((e) => e.message).join(', ')
    throw new Error(errorMessage)
  }

  // 2. Send to backend
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

    console.error('Waitlist subscription failed:', {
      status: response.status,
      statusText: response.statusText,
      errorBody,
    })

    let detail = 'Something went wrong while subscribing. Please try again later.'
    if (typeof errorBody === 'object' && errorBody !== null && 'detail' in errorBody) {
      detail = (errorBody as { detail: string }).detail
    }

    // If it's a 422, it might be a validation error from the backend that slipped through
    if (response.status === 422 && Array.isArray(detail)) {
        // FastAPI returns validation errors as a list of objects in 'detail' usually, 
        // but sometimes just a string. If it's the standard array:
        detail = 'Invalid input provided.'
    }

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
