import axios from 'axios'

export const authApi = {
   async singUp(email, password, name, bill) {
      try {
         const response = await axios.post('/api/auth/singup', { email, password, name, bill }, {
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
   },
   async updateInfo(name, bill, token) {
      try {
         const response = await axios.post('/api/auth/update', { name, bill }, {
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
