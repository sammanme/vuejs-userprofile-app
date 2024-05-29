<!-- src/App.vue -->
<template>
  <div id="app">
    <h1>User Profiles</h1>
    <div class="profiles-container">
      <UserProfile v-for="user in users" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import UserProfile from './components/UserProfile.vue'
import UserService from './UserService'
import avatar from './assets/pix.png'

export default {
  name: 'App',
  components: {
    UserProfile
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    UserService.getUsers()
      .then((response) => {
        // Add the local avatar to each user
        this.users = response.data.map((user) => ({
          ...user,
          avatar: avatar
        }))
      })
      .catch((error) => {
        console.error('There was an error fetching the users:', error)
      })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

.profiles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
