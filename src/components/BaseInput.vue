<template>
  <div>
    <label for="" v-if="label">{{ label }}</label>
    <input
      type="text"
      :value="value"
      @input="updateValue"
      v-on="listeners"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/FormFieldMixin'
export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      }
    },
  },
}
</script>

<style lang="css" scoped>
</style>