import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";

const rootReducer = configureStore({
    reducer:{
        user: UserSlice
    }
})

export default rootReducer