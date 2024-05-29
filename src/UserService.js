// src/UserService.js

import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default {
  getUsers() {
    return axios.get(API_URL)
  }
}
