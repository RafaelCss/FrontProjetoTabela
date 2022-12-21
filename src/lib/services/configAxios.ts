import axios from "axios"

const api = axios.create({
  baseURL: /* process.env.NEXT_PUBLIC_LOCAL  */ "http://localhost:5159/api/",
  headers: {
    'Content-Type': 'application/json'
  },
});



export default api