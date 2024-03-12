import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        comment: commentSlice,
    },
});
    
export default store;