import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./api/ApiSlice";

// console.log("the apiSlice===>", ApiSlice.reducerPath);
const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ApiSlice.middleware);
  },
});

export default store;
