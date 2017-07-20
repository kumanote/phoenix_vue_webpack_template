import axios from 'axios'

export default {
  getUserList (callback) {
    const url = '/api/users'
    axios.get(url).then(function (response) {
      callback(response.data)
    }).catch(function (error) {
      console.log(error)
    })
  },
  addUser (name, age, callback) {
    const url = '/api/users'
    const data = {
      'user': {
        'name': name,
        'age': age
      }
    }
    axios.post(url, data).then(function (response) {
      callback(response.data)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
