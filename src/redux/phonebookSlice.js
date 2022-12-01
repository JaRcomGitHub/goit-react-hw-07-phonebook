import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";


// mockapi.io API endpoint
// https://6386495c875ca3273d562d48.mockapi.io/:endpoint   /contacts/

// Используй функцию createAsyncThunk для объявления асинхронный генераторов экшенов 
//    и выполнения HTTP - запросов.Обработку экшенов и изменение данных в состоянии 
//    Redux сделай при помощи createSlice.

// Объяви следующие операции:
// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".


const initialPhonebook = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: '',
}

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: initialPhonebook,
  reducers: {
    //fetchContacts() {},//GET
    // addContact() {},//POST
    // deleteContact() { },//DELETE

    // fetchingInProgress(state) {
    //   state.contacts.isLoading = true;
    // },
    // fetchingSuccess(state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   state.contacts.items = action.payload;
    // },
    // fetchingError(state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = action.payload;
    // },

    // addContact(state, action) {
    //   state.contacts.items.push({ id: nanoid(), ...action.payload });
    // },
    // delContact(state, action) {
    //   state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload);
    // },
    // setFilter(state, action) {
    //   state.filter = action.payload;
    // },

  },
    extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } = phonebookSlice.actions;
// export const { addContact, delContact, setFilter } = phonebookSlice.actions;



