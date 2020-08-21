import axios from 'axios'

export const axiosWithAuth = axios.create({
  headers: {authorization: localStorage.getItem('token')}
})