// store
import store, { RootState, Actions } from "./store";

// defined typed hooks
import { useAppDispatch, useAppSelector } from "./hooks";

// export store
export default store;

// export root state type
export type { RootState };

// export Actions, typed hooks
export { Actions, useAppDispatch, useAppSelector };
