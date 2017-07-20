<template>
  <div>
    <h2>User List</h2>
    <ul>
      <li><router-link to="/">Top</router-link></li>
      <li><router-link to="/user/add">Add</router-link></li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userList" :key="index">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'userList',
  computed: mapGetters({
    userList: 'userList/userList'
  }),
  mounted () {
    this.$store.dispatch('userList/getUserList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
