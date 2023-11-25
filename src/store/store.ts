import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/location";
import servicesReducer from "./slices/services";
export const store = configureStore({
  reducer: {
    location: locationReducer,
    services:servicesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
