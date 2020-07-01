import axios from 'axios'
export default axios.create({
  baseURL: process.env.API_URL,
  headers: { 'Authorization': 'Bearer c2VndW5kb2RldmVsb3A=' }
})
