import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./slices/location";
import categoryReducer from "./slices/categories";
export const store = configureStore({
  reducer: {
    location: locationReducer,
    categories:categoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
