import axios from 'axios'


export default axios.create({
    baseURL: '/rb',
    timeout: 10000
});

 