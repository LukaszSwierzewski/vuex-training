import EventService from "@/services/EventService.js";

export const namespaced = true;

export const state = {
  events: [],
  eventsLength: 0,
  event: {},
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  FETCH_EVENTS(state, payload) {
    state.events = payload;
  },
  FETCH_EVENT(state, payload) {
    state.event = payload;
  },
  MAX_EVENTS(state, payload) {
    state.eventsLength = payload;
  },
};
export const actions = {
  async fetchEvent({ commit, getters, dispatch }, id) {
    let event = getters.getEventById(id);

    if (event) {
      commit("FETCH_EVENT", event);
    } else {
      try {
        const response = await EventService.getEvent(id);
        const data = await response.data;
        commit("FETCH_EVENT", data);
      } catch (error) {
        const notification = {
          type: "error",
          message: "there was a problem fetching event" + error.message,
        };
        dispatch("notification/add", notification, { root: true });
      }
    }
  },
  createEvent({ commit, rootState, dispatch }, event) {
    return EventService.postEvent(event)
      .then(() => {
        console.log("user creating event is " + rootState.user.user.name);

        commit("ADD_EVENT", event);
        const notification = {
          type: "success",
          message: "New event added",
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch((error) => {
        const notification = {
          type: "error",
          message: "there is a problem adding your event",
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  async FetchEvents(
    { commit, dispatch },
    { events, perPage, page, eventsLength }
  ) {
    try {
      const response = await EventService.getEvents(perPage, page);
      events = await response.data;
      eventsLength = response.headers["x-total-count"];
      commit("FETCH_EVENTS", events);
      commit("MAX_EVENTS", eventsLength);
    } catch (error) {
      const notification = {
        type: "error",
        message: "there was a problem fetching events" + error.message,
      };
      console.log("error");
      dispatch("notification/add", notification, { root: true });
    }
  },
};
export const getters = {
  catLength(state) {
    return state.categories.length;
  },
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id == id);
  },
  getEvents(state) {
    return state.events;
  },
  maxEvents(state) {
    return state.eventsLength;
  },
};
