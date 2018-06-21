<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="top-right links">
          <router-link :to="{ name: 'home' }" class="nav-link" active-class>Home</router-link> |
          <router-link :to="{ name: 'about' }" class="nav-link" active-class>About</router-link> |
          <span v-if="authenticated">
            <router-link :to="{ name: 'dashboard' }" class="nav-link" active-class>Dashboard</router-link> |
            <router-link :to="{ name: 'settings.profile' }" :class="{'router-link-active': subIsActive('/settings')}">Settings</router-link> |
            <a @click.prevent="logout" class=""  href="logout">
              Logout
            </a>
          </span>
          <!-- dropdown-item pl-3 -->
          <span v-else>
            <router-link :to="{ name: 'login' }">
              Login
            </router-link>
            <!-- <router-link :to="{ name: 'register' }">
              {{ $t('register') }}
            </router-link> -->
          </span>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="top-right links">
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link> |
            <span v-if="authenticated && user">
              <router-link :to="{ name: 'dashboard' }">Dashboard</router-link> |
              <a @click.prevent="logout" class="dropdown-item pl-3"  href="logout">
                Logout
              </a>
            </span>
            <span v-else>
              <router-link :to="{ name: 'login' }">Login</router-link>
            </span>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container">
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
      },
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0 // current path starts with this path string
        })
      }
    }
  }
</script>

<style lang="scss">
.top-right {
  text-align: right;
  // position: absolute;
  // right: 10px;
  // top: 18px;
  // z-index: 100;
}

// .basic-layout {
//   color: #636b6f;
//   height: 100vh;
//   font-weight: 100;
//   position: relative;
//
//   .links > a {
//     color: #636b6f;
//     padding: 0 25px;
//     font-size: 12px;
//     font-weight: 600;
//     letter-spacing: .1rem;
//     text-decoration: none;
//     text-transform: uppercase;
//   }
// }
</style>
