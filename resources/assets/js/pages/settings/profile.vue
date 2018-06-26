<template>
  <div class="row">
    <div class="col-xs-10 col-xs-offset-1">
      <!-- <card :title="$t('login')"> -->
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Update Your Profile</h3>
        </div>

        <div class="panel-body">
           <!-- @keydown="form.onKeydown($event)" -->
          <form @submit.prevent="update">
            <!-- Email -->
            <div class="form-group row">
              <!-- {{ $t('email') }} -->
              <label class="col-xs-3 col-form-label text-right">Name</label>
              <div class="col-xs-7">
                <input v-model="form.name" type="name" name="name" class="form-control" placeholder="Name">
                <!-- <input v-model="form.email" type="email" name="email" class="form-control"
                  :class="{ 'is-invalid': form.errors.has('email') }">
                <has-error :form="form" field="email"/> -->
              </div>
            </div>

            <!-- Password -->
            <div class="form-group row">
              <!-- {{ $t('password') }} -->
              <label class="col-xs-3 col-form-label text-right">Email</label>
              <div class="col-xs-7">
                <input v-model="form.email" type="email" name="email" class="form-control" placeholder="Email">
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
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      form: {
        name: '',
        email: '',
      },
    }),
    created () {
      Object.keys(this.form).forEach(key => {
        this.form[key] = this.user[key]
      })
    },
    mounted() {
      //
    },
    methods: {
      async update () {
        try {
          const { data } = await axios.patch('/api/settings/profile', this.form);
          this.$store.dispatch('setUser', data);
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
    computed: {
      ...mapGetters({
        user: 'user',
      })
    }
  }
</script>
