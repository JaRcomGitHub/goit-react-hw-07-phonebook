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



// import initialContacts from '../components/contacts.json'
// export const addContact = createAction("phonebook/addContact");
// export const delContact = createAction("phonebook/delContact");
// const contactsReducer = createReducer
//   (initialContacts, {
//     [addContact]: (state, action) => [...state, { id: nanoid(), ...action.payload }],
//     [delContact]: (state, action) => state.filter(contact => contact.id !== action.payload),
//   });
// export const setFilter = createAction("phonebook/setFilter");
// const filterReducer = createReducer
//   ("", {
//     [setFilter]: (state, action) => action.payload,
//   });
// export const getFilter = store => store.filter;