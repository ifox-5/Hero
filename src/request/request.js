import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8082',
    timeout: 3000
 
  });

  export default instance;