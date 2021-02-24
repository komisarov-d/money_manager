import axios from 'axios'

export const authApi = {
   async singUp(email, password, name) {
      try {

         const response = await axios.post('/api/auth/singup', { email, password, name }, {
            headers: {
               'Content-Type': 'application/json'
            }
         }
         )
         console.log(response);
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   },
   async login(email, password) {
      try {
         const response = await axios.post('/api/auth/login', { email, password }, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         const data = response.json()
         return data
      } catch (e) {
         console.log(`Error: ${e.message}`)
         throw e
      }
   }
}