import { AxiosInstance, AxiosResponse } from "axios";
import config from "../config";
import { getAccessToken, getRefreshToken, setAccessToken } from "../Helpers/TokenHandler";

const axios = require('axios');


const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${config.API_URL}/api/v1`,
    withCredentials: true,
    headers: {
        'Authorization': 'Bearer ' + getAccessToken(),
        'x-refresh': getRefreshToken(),
    },
    
});

axiosInstance.interceptors.response.use((response: AxiosResponse<any, any>) => {

    if(response.headers['x-access-token']) {
        console.log(response.headers['x-access-token']);
        setAccessToken(response.headers['x-access-token']);
    }
    if (response.data) {
        // return success
        if (response.status === 200 || response.status === 201) {
          return response;
        }
        // reject errors & warnings
        return Promise.reject(response);
      }

      // default fallback
      return Promise.reject(response);

}, (error)=> {

    //if the server throws an error (404, 500 etc.)
      return Promise.reject(error);

});


// axiosInstance.interceptors.request.use((config) => {
    
//         console.log(config)
    
//         return config;
    
// })



export default axiosInstance;

