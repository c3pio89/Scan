import { configureStore } from '@reduxjs/toolkit';
import myReducer from "./reducers.js";


const store = configureStore(
    {reducer:myReducer})
export default store;