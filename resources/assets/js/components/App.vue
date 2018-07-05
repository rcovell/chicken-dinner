<template>
  <!-- <div> -->
  <div id="app">
    <loading ref="loading"/>
    <primary-nav></primary-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Loading from './Loading.vue'
  import PrimaryNav from './PrimaryNav.vue';
  import { mapGetters } from 'vuex'

  export default {
    el: '#app',
    components: {
      Loading,
      PrimaryNav
    },
    created() {
      this.getUser();
    },
    mounted() {
      this.$loading = this.$refs.loading;
    },
    computed: {
      ...mapGetters({
        authenticated: 'authenticated',
      })
    },
    methods: {
      async getUser () {
        if (this.authenticated) {
          const { data } = await axios.get('/api/get-user');
          this.$store.dispatch('setUser', data);
        }
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
