<template>
  <div>
    <label for="" v-if="label">{{ label }}</label>
    <select
      type="text"
      v-on="listeners"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :key="option"
        :selected="option == value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/FormFieldMixin.js'
export default {
  mixins: [formFieldMixin],
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
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