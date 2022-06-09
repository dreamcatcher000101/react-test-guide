// node_modules
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// store
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
