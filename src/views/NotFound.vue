<template>
  <div>
    <h1>Page not found 404</h1>
    <p>the {{ resource }} is not here</p>
    <router-link :to="{ name: 'event-list' }">Back to home page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
</style>