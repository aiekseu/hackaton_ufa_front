import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import filterSlice from "./FilterSlice";
  import eventSlice from "./EventSlice";
  import personFilterSlice from "./PersonFilterSlice";
  import chipSlice from "./ChipSlice";

  const reducer = combineReducers({
    roomFilter: filterSlice, 
    personFilter: personFilterSlice,
    eventReducer: eventSlice,
    chipReducer: chipSlice

  });
  
  const store = configureStore({
    reducer: reducer
  });
  
  export default store;