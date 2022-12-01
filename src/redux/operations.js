import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./phonebookSlice";

// mockapi.io API endpoint
// https://6386495c875ca3273d562d48.mockapi.io/:endpoint   /contacts/

axios.defaults.baseURL = "https://6386495c875ca3273d562d48.mockapi.io";

// export const fetchTasks = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());  
//     const response = await axios.get("/contacts");
//     dispatch(fetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { ...data });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);