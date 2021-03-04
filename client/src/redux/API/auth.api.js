import axios from 'axios'

export const authApi = {
   async singUp(email, password, name) {
      try {
         const response = await axios.post('/api/auth/singup', { email, password, name }, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         return response
      } catch (e) {
         throw e.response.data.message
      }
   },
   async login(email, password) {
      try {
         const response = await axios.post('/api/auth/login', { email, password }, {
            headers: {
               'Content-Type': 'application/json'
            }
         })

         const data = response.data
         return data
      } catch (e) {
         throw e.response.data.message
      }
   },
   async fetchInfo(token) {
      try {
         const response = await axios.get('/api/auth/info', {
            headers: {
               Authorization: `Bearer: ${token}`
            }
         })
         const data = response.data
         return data
      } catch (e) {
         throw e.response.data.message
      }
   }
}
