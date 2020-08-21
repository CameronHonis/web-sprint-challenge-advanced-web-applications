import { axiosWithAuth } from '../axiosBuilds'

export const fetchColors = () => {
  return axiosWithAuth.get('http://localhost:5000/api/colors')
}