import { createSlice } from "@reduxjs/toolkit";

const chipSlice = createSlice({
    name: "chip",
    initialState: {
        count: 0,
        chips: [
            
        ],
    },

    reducers: {
        handleAdd: ( state, action ) => {
            const { chipToAdd } = action.payload;
            state.chips.push(chipToAdd);
            state.count++
            
            
            /*const arr = state.chips.filter((chip) => chip.key === chipToAdd.email)
            if (arr){
                return {...state, chips: state.chips.push(chipToAdd)}
            } else{
                return { ...state}
            }*/
            
        },
        handleDelete: ( state, action ) => {
            const { chipToDelete } = action.payload;
            state.count -=1
            state.chips = state.chips.filter((chip) => chip.key !== chipToDelete.key)
        }
    }
});


export const {handleAdd, handleDelete} = chipSlice.actions;

export default chipSlice.reducer