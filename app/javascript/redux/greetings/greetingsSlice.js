import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GREETINGS_URL = 'http://127.0.0.1:3000/greetings/random';


export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    const response = await axios.get(GREETINGS_URL, {mode:'cors'});
    return response.data;
  }
);

const initialState = {
  message: [],
  status: 'idle',
};

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload;
    });
  },
});

export default greetingsSlice.reducer;