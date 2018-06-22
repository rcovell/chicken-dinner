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
  </div>
</template>
<script>
  export default {
    mounted() {
      //
    },
    methods: {
      subIsActive(input) {
        const paths = Array.isArray(input) ? input : [input]
        return paths.some(path => {
          return this.$route.path.indexOf(path) === 0
        })
      }
    },
    computed: {
      authenticated () {
        return auth.check()
      }
    }
  }
</script>
