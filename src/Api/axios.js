/*import axios from 'axios'

export default axios.create({
baseURL:"http://localhost:8000/api/"
})
*/

import axios from "axios";

axios.defaults.baseURL = "https://projet-laravel2024.vercel.app/api/api/"


//simple request sans header

export function getAxiosInstance() {

  if (axios === null) {

    axios.create({

      baseURL: axios.defaults.baseURL,

    });

  }

}

// Add a request interceptor

axios.interceptors.request.use(

  config => {
     const token=localStorage.getItem("CC_Token");
      if (token) { console.log(localStorage.getItem("CC_Token"))

          config.headers['Authorization'] = 'Bearer ' + token;

      }

      return config;

  },

  error => {

      Promise.reject(error)

  });

 
  //Response interceptor

axios.interceptors.response.use((response) => {
console.log(response)
  return response

},

function (error) {

  const originalRequest = error.config;
console.log(error)
  if (error.response.status === 401 && !originalRequest._retry) {
      console.log("Error 401 detected")
 
      originalRequest._retry = true;
  console.log(localStorage.getItem("CC_Token") )
        return axios.post(axios.defaults.baseURL + 'users/refreshToken/',null,  {
          headers: { 'Authorization': 'Bearer ' + localStorage.getItem("CC_Token") }
        })
          .then(res => { 
            console.log('req refresh')
            console.log(res)

              if (res.status === 200) { 
                console.log(res.status)
                  // 1) put tokens to LocalStorage

              localStorage.setItem('CC_Token', res.data.access_token);
   
            
                 // 2) Change Authorization header

                  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('CC_Token');

 
                  // 3) return originalRequest object with Axios.

                  return axios(originalRequest);

              }

          })

        }      

  }



);

export default axios;
