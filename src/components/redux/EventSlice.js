import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const eventSlice = createSlice({
    name: "counter",
    initialState: {
        chosenEvent: {},
        events: [
            {   
                id: 0,
                allday: true,
                start: moment().toDate(),
                end: moment()
                  .add(1, "days")
                  .toDate(),
                title: "Комната 1",
                room: 1,
                participants: ["Бэлиг", "Данил"],
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
              },
              {
                id: 1,
                start: new Date(2021, 2, 22, 14, 0),
                end: new Date(2021, 2, 22, 14, 30),
                title: "Комната 2",
                room: 2,
                participants: ["Леха", "Данил"],
                data: [[0, 7], [1, 2], [2, 5], [3, 5], [4, 1]]
              },
              {
                id: 2,
                start: new Date(2021, 2, 25, 16, 0),
                end: new Date(2021, 2, 25, 17, 0),
                title: "Комната 3",
                room: 3,
                participants: ["Влад", "Лиза"],
                data: [[0, 3], [1, 4], [2, 6], [3, 5], [4, 5]]
              },
              {
                id: 3,
                start: new Date(2021, 2, 25, 17, 0),
                end: new Date(2021, 2, 25, 18, 0),
                title: "Комната 4",
                room: 4,
                participants: ["Влад", "Лиза"],
                data: [[0, 1], [1, 7], [2, 0], [3, 2], [4, 4]]
              }
        ],
    },

    reducers: {
        changeChosenEvent: ( state, action ) => {
          const { freeEvent } = action.payload;
          console.log("Free event");
          console.log(freeEvent);
          return {...state, chosenEvent: freeEvent}
      },
        changeEvent: ( state, action ) => {
            const { events } = action.payload;
            return {...state, events: events}
        },
        addEvent:  ( state, action ) => {
          const { event } = action.payload;
          console.log("edding a free avent");
          console.log(event);
          state.events.push(event)
        }
    }
});


export const {changeEvent, addEvent, changeChosenEvent} = eventSlice.actions;

export default eventSlice.reducer