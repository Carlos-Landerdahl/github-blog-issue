/* eslint-disable no-useless-catch */
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com/',
})

export const fetchUser = async (username: string) => {
  try {
    const response = await api.get(`users/${username}`)
    return response.data
  } catch (error) {
    throw error
  }
}
