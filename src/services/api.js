import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/`)
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    return { projects: [], skills: [], messages: [] }
  }
}

export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${API_URL}/messages`, messageData)
    return response.data
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}

export const getMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/messages`)
    return response.data
  } catch (error) {
    console.error('Error getting messages:', error)
    return []
  }
}
