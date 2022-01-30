import { createSlice } from "@reduxjs/toolkit";

const initialEvents = {
  events: [],
  speakers: []
};

const eventSlice = createSlice({
  name: "events",
  initialState: initialEvents,
  reducers: {
    setEvents(state, action) {
      state.events = action.payload
    },
    setSpeakers(state, action) {
      state.speakers = action.payload
    },
    addEvent(state, action) {
      state.events = [...state.events, action.payload]
    },
    updateEvent(state,action) {
      console.log(action.payload)
      state.events.forEach((item, index) => {
        if(item._id === action.payload._id) {
          console.log("This has updated")
          state.events.splice(index, 1)
          state.events.splice(index, 0, action.payload)
        }
      })
    },
    deleteEvent(state, action) {
      state.events.forEach((item, index) => {
        if(item._id === action.payload) {
          state.events.splice(index, 1)
        }
      })
    },
    addSpeaker(state, action) {
      state.speakers = [...state.speakers, action.payload]      
    },
    updateSpeaker(state, action) {
      state.speakers.forEach((item, index) => {
        if(item._id === action.payload._id) {
          state.speakers.splice(index, 1)
          state.speakers.splice(index, 0, action.payload)
        }
      })
    },
    deleteSpeaker(state, action) {
      state.speakers.forEach((item, index) => {
        if(item._id === action.payload) {
          state.speakers.splice(index, 1)
        }
      })
    }
  },
});

export const eventActions = eventSlice.actions;

export default eventSlice.reducer;