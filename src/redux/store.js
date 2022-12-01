import { configureStore } from "@reduxjs/toolkit";
import { phonebookSlice } from "./phonebookSlice";

export const store = configureStore({
  reducer: {
    phonebook: phonebookSlice.reducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoreActions: [FLUSH, REHYDRATE, PAUSE,
  //         PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});
