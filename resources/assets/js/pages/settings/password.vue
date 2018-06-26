<template>
  <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
      <!-- <card :title="$t('login')"> -->
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Update Your Password</h3>
        </div>

        <div class="panel-body">
           <!-- @keydown="form.onKeydown($event)" -->
          <form @submit.prevent="update">
            <!-- Email -->
            <div class="form-group row">
              <!-- {{ $t('email') }} -->
              <label class="col-xs-3 col-form-label text-right">New Password</label>
              <div class="col-xs-7">
                <input v-model="form.password" type="password" name="password" class="form-control">
                <!-- <input v-model="form.email" type="email" name="email" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }">
                <has-error :form="form" field="email"/> -->
              </div>
            </div>

            <!-- Password -->
            <div class="form-group row">
              <!-- {{ $t('password') }} -->
              <label class="col-xs-3 col-form-label text-right">Confirm Password</label>
              <div class="col-xs-7">
                <input v-model="form.password_confirmation" type="password" name="password_confirmation" class="form-control">
                <!-- <input v-model="form.password" type="password" name="password" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('password') }">
                <has-error :form="form" field="password"/> -->
              </div>
            </div>

            <div class="form-group row">
              <div class="col-xs-7 col-xs-offset-3">
                <!-- Submit Button -->
                <button class="btn btn-primary" type="submit">Update</button>
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
    // scrollToTop: false,
    data: () => ({
      form: {
        password: '',
        password_confirmation: '',
      },
    }),
    created () {
      //
    },
    mounted() {
      //
    },
    methods: {
      async update () {
        try {
          const { data } = await axios.patch('/api/settings/password', this.form);
          this.form.password = '';
          this.form.password_confirmation = '';
        }
        catch (error) {
          if (error.status === 401) {
            this.$store.dispatch('logout');
            this.$router.push({ name: 'home' });
          }
          console.log(error.response.data.message)
        }
      },
    },
  }
</script>
