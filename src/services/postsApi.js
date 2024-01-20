import { API } from './API'

export const getPosts = async (userId) => {
  try {
    const response = await API.get(`/posts?userId=${userId}`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}
