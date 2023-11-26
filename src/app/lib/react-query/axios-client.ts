import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL
const axiosClient = axios.create()


axiosClient.defaults.baseURL = baseURL

export default axiosClient