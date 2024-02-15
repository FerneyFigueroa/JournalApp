
import axios from 'axios';

const authApi = axios.create({
    baseURL:'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 
        'AIzaSyAGS-frd6GvTzWnrU_rabtnkT8pXEkOVxc'
    }
})

// console.log(process.env.NODE_ENV)
// console.log(process.env.NODE_ENV)

export default authApi