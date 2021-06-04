<template>
  <div id="nav">
    <router-link to="/" class="brand">Real world Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">create event</router-link>


    </nav>
  </div>
</template>

<script>
</script>

<style>
</style>