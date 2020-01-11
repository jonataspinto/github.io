import axios from 'axios'
const api = axios.create({baseURL:'https://api.github.com/users/jonataspinto'})

export const GetGithubProfile = async ()=>{
   const res = await api.get()
   return await res.data
}