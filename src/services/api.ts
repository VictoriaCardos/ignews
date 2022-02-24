import axios from 'axios'

export const api = axios.create({
  baseURL: '/api' //significa que ele vai aproveitar o http.... e colocar /api no final
})