<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="row">
          <router-link :to="{ name: 'home' }" class="nav-link navbar-brand" active-class>LaraPassVue SPA</router-link>

          <ul class="nav navbar-nav">
            <li>
              <router-link :to="{ name: 'about' }" class="nav-link" active-class>About</router-link>
            </li>
            <li v-if="authenticated">
              <router-link :to="{ name: 'dashboard' }" class="nav-link" active-class>Dashboard</router-link>
            </li>
            <li class="dropdown" v-if="authenticated">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><fa icon="user" fixed-width/>{{ user.name }} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li>
                  <router-link :to="{ name: 'settings.profile' }" :class="{'router-link-active': subIsActive('/settings')}"><fa icon="cog" fixed-width/>Settings</router-link>
                </li>
                <li>
                  <a @click.prevent="logout" href="logout"><fa icon="sign-out-alt" fixed-width/>Logout</a>
                </li>
              </ul>
            </li>
            <li v-if="!authenticated">
              <router-link :to="{ name: 'login' }">Login</router-link>
            </li>
          </ul>

          <div class="top-right links">
            <!-- <router-link :to="{ name: 'home' }" class="nav-link" active-class>Home</router-link>
            <router-link :to="{ name: 'about' }" class="nav-link" active-class>About</router-link> |
            <span v-if="authenticated">
              <router-link :to="{ name: 'dashboard' }" class="nav-link" active-class>Dashboard</router-link> |
              <router-link :to="{ name: 'settings.profile' }" :class="{'router-link-active': subIsActive('/settings')}">Settings</router-link> |
              <a @click.prevent="logout" href="logout">
                Logout
              </a>
            </span>
            <span v-else>
              <router-link :to="{ name: 'login' }">
                Login
              </router-link>
            </span> -->
            <!-- <router-link :to="{ name: 'register' }">
              {{ $t('register') }}
            </router-link> -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    mounted() {
      //
    },
    methods: {
      async logout () {
        try {
          const { data } = await axios.post('/api/logout')
          this.$store.dispatch('logout')
          this.$router.push({ name: 'home' })
        }
        catch (error) {
          console.log('Error: Could not log out.')
          console.log(error.response.data.message)
        }
      },
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0
        })
      }
    },
    computed: {
      ...mapGetters({
        user: 'user',
        authenticated: 'authenticated',
      })
    }
  }
</script>
