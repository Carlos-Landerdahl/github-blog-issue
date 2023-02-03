/* eslint-disable no-useless-catch */
import axios from 'axios'

const api = axios.create({
  baseURL: '#',
  // baseURL: 'https://api.github.com/',
})

export const fetchUser = async (username: string) => {
  const controller = new AbortController()

  try {
    const response = await api.get(`users/${username}`, {
      signal: controller.signal,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
