<template>
  <div>
    <primary-nav></primary-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import PrimaryNav from './PrimaryNav.vue';

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
    components: {
      'primary-nav': PrimaryNav
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
