import { API } from './API'

export const getAlbums = async (userId) => {
  try {
    const response = await API.get(`/users/${userId}/albums`)
    return response.data
  } catch (error) {
    console.log(error);
  }
}
