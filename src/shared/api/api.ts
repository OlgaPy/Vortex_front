import Axios from 'axios'
import {setupCache} from 'axios-cache-interceptor'
import {cacheOptions} from './cacheConfig'
import {axiosOptions} from './axiosConfig'

const axios = Axios.create(axiosOptions)
export const api = setupCache(axios, cacheOptions)
