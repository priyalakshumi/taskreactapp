import axios from 'axios'

//The interceptors we use in index.js can be used throughout the project but
//if in case we use different url in some places and diff authtoken we can use this axios.create for multiple urls
//and import this class and use it

const instance = axios.create({
    baseURL: "https://priya-taskmanagerapp.herokuapp.com"
})

//instance.defaults.headers.common['Authorization'] = userstate.token

export default instance
