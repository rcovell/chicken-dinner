<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-3">
          <router-link :to="{ name: 'settings.profile' }" class="nav-link" active-class>Profile</router-link>
          <br />
          <router-link :to="{ name: 'settings.password' }" class="nav-link" active-class>Password</router-link>
        </div>
        <div class="col-xs-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
