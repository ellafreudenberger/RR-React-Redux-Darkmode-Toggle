import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  objectId: 10245,
  apiData: {},
};

export const fetchData = createAsyncThunk('data/fetchData', async (objectId) => {
  const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`);
  const rData = await response.json();
  return rData;
});

const dataSlice = createSlice({
  name: 'data', 
  initialState,
  reducers: {
    clearData: (state) => {
      state.apiData = {};
    },
    incrementId: (state) => {
      state.objectId += 1;
    },
    decrementId: (state) => {
      state.objectId -= 1;
    },
    inputId: (state, action) => {
      state.objectId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.apiData = action.payload;
      });
  },
});

export const { clearData, incrementId, decrementId, inputId } = dataSlice.actions;

export default dataSlice.reducer
