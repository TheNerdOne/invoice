import axios from 'axios'
import { API_URL } from '../config/HTTP'

axios.defaults.baseURL = API_URL
const Api = {
    query(resource, params) {
        return axios.get(resource, params)
    },

    get(resource) {
        return axios.get(`${resource}`)
    },

    post(resource, params) {
        return axios.post(`${resource}`, params)
    },

    update(resource, slug, params) {
        return axios.put(`${resource}/${slug}`, params)
    },

    put(resource, params) {
        return axios.put(`${resource}`, params)
    },

    delete(resource, params) {
        return axios.delete(resource, params)
    },
}

export default Api
