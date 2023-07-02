import axios from 'axios'

const api = axios.create({
  baseURL: 'https://digimon-api.vercel.app/api'
})

export const fetchDigimons = async () => {
  try {
    console.log(api.getUri())
    const response = await api.get('/digimon')
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const fetchDigimonByName = async name => {
  try {
    const response = await api.get(`/digimon/name/${name}`)

    return response.data[0]
  } catch (error) {
    console.error(error)
    return null
  }
}

export default api
