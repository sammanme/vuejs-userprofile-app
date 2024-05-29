<!-- src/components/UserProfile.vue -->
<template>
  <div class="user-profile">
    <img :src="user.avatar" alt="User Avatar" class="avatar" />
    <h2>{{ user.name }}</h2>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
    <p><strong>Address:</strong> {{ fullAddress }}</p>
    <p>
      <strong>Website:</strong> <a :href="`http://${user.website}`">{{ user.website }}</a>
    </p>
    <p><strong>Company:</strong> {{ user.company.name }}</p>
  </div>
</template>

<script>
import defaultAvatar from '../assets/pix.png'

export default {
  name: 'UserProfile',
  props: {
    user: Object
  },
  data() {
    return {
      defaultAvatar: defaultAvatar
    }
  }
}
</script>

<!-- <script>
export default {
  props: {
    user: Object
  },
  computed: {
    fullAddress() {
      return `${this.user.address.suite}, ${this.user.address.street}, ${this.user.address.city}, ${this.user.address.zipcode}`
    }
  }
}
</script> -->

<style scoped>
.user-profile {
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 300px;
}
.avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>
