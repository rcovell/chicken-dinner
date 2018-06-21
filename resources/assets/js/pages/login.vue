<template>
  <div class="row">
    <div class="col-xs-8 col-xs-offset-2">
      <!-- <card :title="$t('login')"> -->
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Log In</h3>
        </div>

        <div class="panel-body">
           <!-- @keydown="form.onKeydown($event)" -->
          <form @submit.prevent="login">
            <!-- Email -->
            <div class="form-group row">
              <!-- {{ $t('email') }} -->
              <label class="col-xs-3 col-form-label text-right">Email</label>
              <div class="col-xs-7">
                <input v-model="form.username" type="email" name="username" class="form-control" placeholder="Email">
                <!-- <input v-model="form.email" type="email" name="email" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }">
                <has-error :form="form" field="email"/> -->
              </div>
            </div>

            <!-- Password -->
            <div class="form-group row">
              <!-- {{ $t('password') }} -->
              <label class="col-xs-3 col-form-label text-right">Password</label>
              <div class="col-xs-7">
                <input v-model="form.password" type="password" name="password" class="form-control" placeholder="Password">
                <!-- <input v-model="form.password" type="password" name="password" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('password') }">
                <has-error :form="form" field="password"/> -->
              </div>
            </div>

            <!-- Remember Me -->
            <div class="form-group row">
              <div class="col-xs-3"></div>
              <div class="col-xs-7">
                <!-- <div class="checkbox">
                  <label>
                    <input type="checkbox" :value="remember_me" > Remember Me
                  </label>
                </div> -->
                <!-- <checkbox v-model="remember" name="remember"> -->
                  <!-- {{ $t('remember_me') }} -->
                  <!-- Remember Me
                </checkbox> -->

                <!-- <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                  {{ $t('forgot_password') }}
                </router-link> -->
              </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-7 col-xs-offset-3">
                <!-- Submit Button -->
                <button class="btn btn-primary" type="submit">Log In</button>
                <!-- <v-button :loading="form.busy">
                  {{ $t('login') }}
                </v-button> -->

                <!-- GitHub Login Button -->
                <!-- <login-with-github/> -->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // middleware: 'guest',
  //
  // components: {
  //   LoginWithGithub
  // },

  // metaInfo () {
  //   // return { title: this.$t('login') }
  // },

  created() {
    //
  },

  mounted() {
    if (this.$route.query.redirect) {
      this.redirect = this.$route.query.redirect;
    }
  },

  data: () => ({
    form: {
      username: '',
      password: '',
    },
    remember: false,
    redirect: '',
    newOptionNameSelected: 99999,
  }),

  methods: {
    async login () {
      try {
        const { data } = await axios.post('/api/login', this.form)
        auth.login(data.token, data.user)
        // this.$router.push('/')
        this.$router.push(this.redirect)
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
