import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  client: { name: null, mail: null, message: null },
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.client = action.payload;
    },
  },
});

export const { addMessage } = messageSlice.actions;
export const message = messageSlice.reducer;
