// node_modules
import { configureStore } from "@reduxjs/toolkit";

// slices & actions
import { Slices, Actions } from "./slices";

// create store
const store = configureStore({
  reducer: Slices,
});

// root state
export type RootState = ReturnType<typeof store.getState>;

// export app dispatch
export type AppDispatch = typeof store.dispatch;

// export actions
export { Actions };

// export store
export default store;
