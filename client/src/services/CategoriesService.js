const baseURL = 'http://localhost:3000/api/categories/'

export default {
  getCategories(){
    return fetch(baseURL)
    .then(res => res.json())
  }
}
