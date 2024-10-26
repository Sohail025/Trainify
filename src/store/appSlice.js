import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    sidebarOpen: false,
  },
  reducers: {
    SidebarOpener(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { SidebarOpener } = appSlice.actions;
export default appSlice.reducer;
