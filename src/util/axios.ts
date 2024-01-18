import axios from "axios"

const http = axios.create({
  baseURL: "https://localhost:4000/api/",
})

http.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer token`
  return config
})

export default http
