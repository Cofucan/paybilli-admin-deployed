import { QueryClient } from '@tanstack/react-query'
import CustomFetchClient from './CustomFetchClient.js'

export const queryClient = new QueryClient()
export const customFetch = new CustomFetchClient('http://localhost:8000', {
  credentials: 'include',
})


