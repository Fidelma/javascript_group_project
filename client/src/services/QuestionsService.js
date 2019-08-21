const baseURL = 'http://localhost:3000/api/questions/'

export default {
  getQuestions(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postQuestion(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
  }
}
