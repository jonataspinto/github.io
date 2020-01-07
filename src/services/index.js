import axios from 'axios'

const api = axios.create({baseUrl: 'https://api.github.com/users/'})

export const GetGithubProfile = async ()=>{
    let jon = 'jonataspinto'
   const res =await  api.get(`/${jon}`)
   console.log(res);
   
   fetch('https://api.github.com/users/jonataspinto').then(res=> res.json()).then(res=> console.log(res)
   )
   
//    return await res.data
}