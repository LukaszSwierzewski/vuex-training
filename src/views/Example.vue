  <template>
  <form @submit.prevent="submit">
    <input
      type="email"
      :class="{ error: $v.email.$error }"
      placeholder="What's your email"
      v-model="email"
      @blur="$v.email.$touch()"
    />
    <div v-if="$v.email.$error">
      <p class="errorMessage" v-if="!$v.email.email">Wrong email</p>
      <p class="errorMessage" v-if="!$v.email.required">email is required</p>
    </div>
    <button :disabled="$v.$invalid" type="submit">Submit</button>
    <p v-if="$v.$anyError">Please fill out the required field</p>
  </form>
</template>
    
    <script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      email: null,
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log(`form is ok ${this.email}`)
      }
    },
  },
}
</script>