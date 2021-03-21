import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "counter",
    initialState: {
        room: 1,
    },

    reducers: {
        change: (state) => {
            return state.room == 4 ? {...state, room: 0}:{...state, room: state.room + 1}},
        changeRoomFilter: ( state, action ) => {
            const { roomNumber } = action.payload;
            console.log(roomNumber);
            return {...state, room: roomNumber}
        }
    }
});


export const {changeRoomFilter, change} = filterSlice.actions;

export default filterSlice.reducer