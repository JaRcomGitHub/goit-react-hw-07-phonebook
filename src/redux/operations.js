import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./phonebookSlice";

// mockapi.io API endpoint
// https://6386495c875ca3273d562d48.mockapi.io/:endpoint   /contacts/

axios.defaults.baseURL = "https://6386495c875ca3273d562d48.mockapi.io";

export const fetchTasks = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());  
      
    const response = await axios.get("/contacts");
      
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    dispatch(fetchingError(e.message));
  }
};

export const fetchTasks2 = createAsyncThunk("tasks/fetchAll", async () => {
  const response = await axios.get("/contacts");
  return response.data;
});
