<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-xs-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Settings</h3>
            </div>
            <div class="panel-body">
              <ul class="nav flex-column nav-pills nav-stacked">
                <li>
                  <router-link :to="{ name: 'settings.profile' }" class="nav-link" active-class><fa icon="user" fixed-width/>Profile</router-link>
                  <!-- <i class="fas fa-user"></i> -->
                </li>
                <li>
                  <router-link :to="{ name: 'settings.password' }" class="nav-link" active-class><fa icon="lock" fixed-width/>Password</router-link>
                </li>
              </ul>
            </div>
          </div>
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
