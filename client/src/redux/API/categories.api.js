import axios from 'axios'


export const categoriesApi = {
   async fetchCategories(token) {
      try {
         const response = await axios.get('/api/category', {
            headers: {
               Authorization: `Bearer: ${token}`
            }
         })
         const categories = response.data.categories
         return categories

      } catch (e) {
         throw e.response.data.message

      }
   },
   async createCategory(title, limit, token) {
      try {
         const response = await axios.post('/api/category/create', { title, limit }, {
            headers: {
               Authorization: `Bearer: ${token}`,
               'Content-Type': 'application/json'
            }
         })
         const categories = response.data.categories
         return categories
      } catch (e) {
         console.log('warrning');
         throw e.response.data.message

      }
   },
   async updateCategory(categoryId, updatedCategory, token) {
      try {
         const response = await axios.post(`/api/category/update/${categoryId}`, { updatedCategory }, {
            headers: {
               Authorization: `Bearer: ${token}`,
               'Content-Type': 'application/json'
            }
         })
         console.log(response)
         // const data = response.json()
         // return data
      } catch (e) {
         throw e.response.data.message
      }
   }
}