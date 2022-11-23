import axios from 'axios';
// const { baseUrl,apiKey}=require('../Constants/constants');
import {baseUrl,apiKey} from '../Constants/constants.js'
const instance = axios.create({
    baseURL: baseUrl,
});
export default instance