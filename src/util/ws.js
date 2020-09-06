import axios from 'axios'


export default axios.create({
    baseURL: '/ws',
    timeout: 10000
});