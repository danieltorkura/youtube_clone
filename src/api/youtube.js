import axios from 'axios'

let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
let baseURL = 'https://www.googleapis.com/youtube/v3'



export default axios.create({
   
    baseURL: ( baseURL + proxyUrl) 
  
})