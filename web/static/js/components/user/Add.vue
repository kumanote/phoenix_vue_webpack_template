<template>
  <div>
    <h2>User Registeration</h2>
    <ul>
      <li><router-link to="/">Top</router-link></li>
      <li><router-link to="/user/list">List</router-link></li>
    </ul>
    <div>
      <dl>
        <dt>name</dt><dd><input type="text" name="name" v-model="form.name"></dd>
        <dt>age</dt><dd><input type="number" name="age" v-model="form.age"></dd>
      </dl>
      <div>
        <button @click="addUser">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import { mapGetters } from 'vuex'
export default {
  name: 'userAdd',
  computed: mapGetters({
    form: 'userAdd/form'
  }),
  methods: {
    addUser: function () {
      const onSuccess = function (message) {
        if (message) {
          alert(message)
        }
        router.push({ name: 'user_list' })
      }
      const onFailure = function (reason) {
        alert(reason)
      }
      this.$store.dispatch('userAdd/addUser', onSuccess, onFailure)
    }
  },
  mounted () {
    this.$store.dispatch('userAdd/reset')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
