<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>LarVueBoot SPA</h1>
          <!-- <p>
            <router-link :to="{ name: 'gamesIndex' }">Games</router-link> |
            <router-link :to="{ name: 'createGame' }">Create Game</router-link>
          </p> -->
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  // export default {}
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
    },
  }
</script>
