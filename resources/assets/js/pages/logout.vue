<template>
</template>

<script>

export default {

  methods: {
    async login () {
      try {
        const { data } = await axios.post('/api/login', this.form)
        auth.login(data.token, data.user)
        this.$router.push('/')
      }
      catch (error) {
        console.log(error.response.data.message)
      }



      // Submit the form.
      // const { data } = await this.form.post('/api/login')
      //
      // // Save the token.
      // this.$store.dispatch('auth/saveToken', {
      //   token: data.token,
      //   remember: this.remember
      // })
      //
      // // Fetch the user.
      // await this.$store.dispatch('auth/fetchUser')
      //
      // // Redirect home.
      // this.$router.push({ name: 'home' })
    }
  }
}
</script>
