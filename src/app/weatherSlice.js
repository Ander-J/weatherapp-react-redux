import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherAPI";

const initialState = {
  status: "loading",
  data: [],
  selectedWeather: {},
};

/* export const getAllData = createAsyncThunk(async () => {
  const response = weatherApi.useGetAllQuery();
  return response.data;
});

export const getById = createAsyncThunk(async (id) => {
  const response = weatherApi.useGetByIdQuery(id);
  return response.data;
}); */

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSelectedWeather: (state, action) => {
      state.selectedWeather = action.payload;
    },
  },
  extraReducers: (builder) => {
    /* builder
      .addCase(getAllData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(getById.pending); */
  },
});

export const selectedWeather = (state) => state.weather.selectedWeather;

export const { setSelectedWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
