import { API } from './API'

export const getUsers = async () => {
  try {
    const response = await API.get('/users')
    return response.data
  } catch (error) {
    console.log(error);
  }
}

export const getUser = async (userId) => {
  try {
    const response = await API.get(`/users/${userId}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}