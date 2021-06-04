<template>
  <div class="notification-container">
    blabla
    <notification-bar
      v-for="notification in notifications"
      :key="notification"
      :notification="notification"
    ></notification-bar>
  </div>
</template>

<script>
import NotificationBar from "@/components/NotificationBar.vue";
import { mapState } from "vuex";
export default {
  components: {
    NotificationBar,
  },
  computed: {
    ...mapState("notification", ["notifications"]),
  },
};
</script>

<style lang="css" scoped>
</style>