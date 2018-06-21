<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>LaraPassVue SPA</h1>
          <p>
            SPA starter template using Laravel / Passport and Vue.
          </p>
          <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link> |
            <span v-if="authenticated && user">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
            </span>
            <span v-if="authenticated && user">
              <p>Hello, {{ user.name }}</p>

              <a @click.prevent="logout" class="dropdown-item pl-3"  href="logout">
                <!-- <fa icon="sign-out-alt" fixed-width/> -->
                Logout
              </a>
            </span>
            <router-link to="/login" v-else>Login</router-link>
          </p>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        authenticated: auth.check(),
        user: auth.user
      };
    },
    mounted() {
      Bus.$on('userLoggedIn', () => {
        this.authenticated = true
        this.user = auth.user
      });
      Bus.$on('userLogout', () => {
        this.authenticated = false
        this.user = {}
      });
    },
    methods: {
      async logout () {
        try {
          const { data } = await axios.post('/api/logout')
          auth.logout()
          this.$router.push('/')
        }
        catch (error) {
          console.log(error.response.data.message)
        }
      }
    }
  }
</script>
