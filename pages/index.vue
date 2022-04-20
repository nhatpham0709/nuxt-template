<template>
  <div>
    <button @click="logout">Logout</button>
    <span>{{ $auth.user.name }}</span>
    <button @click="testApi">API</button>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push(this.localePath('/login'));
    },
    async testApi() {
      const response = await this.$api.testApi()
      console.log(response)
    }
  },
}
</script>
