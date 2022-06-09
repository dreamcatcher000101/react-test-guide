// node_modules
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// model
import { User } from "../../models";

type MeState = {
  data: null | User;
};

const initialState: MeState = {
  data: null,
};

const meSlice = createSlice({
  name: "me",
  initialState: initialState,
  reducers: {
    setMe(state: MeState, action: PayloadAction<{ user: User }>) {
      state.data = action.payload.user;
    },
    singout(state: MeState) {},
  },
});

export const meActions = meSlice.actions;

export default meSlice;
