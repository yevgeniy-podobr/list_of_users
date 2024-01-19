import { toast } from 'react-toastify'
import axios from 'axios'
import { API_URL } from './config'

const ERROR_NO_INTERNET = 'No internet connection'

export const API = axios.create({
  baseURL: API_URL
})

API.interceptors.request.use(
  (config) => {
    if (!window.navigator.onLine) {
      toast.error(ERROR_NO_INTERNET, {
        toastId: ERROR_NO_INTERNET,
      })
    }
    return config
  }
)

API.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
)
