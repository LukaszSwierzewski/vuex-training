<template>
  <div>
    <h1>EVENT LISTING for {{ user.user.name }}</h1>
    <eventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev page</router-link
      >
    </template>
    <template v-if="this.page != this.maxPage">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >Next page</router-link
      >
    </template>
    {{ maxEvents }}
  </div>
</template>

<script>
import EventCard from "@/components/eventCard.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    EventCard,
  },
  async created() {
    this.$store.dispatch("event/FetchEvents", {
      perPage: 3,
      page: this.page,
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    maxPage() {
      return Math.ceil(this.maxEvents / 3);
    },
    ...mapGetters({ maxEvents: "event/maxEvents" }),
    ...mapState(["user", "event"]),
  },
};
</script>

<style>
</style>