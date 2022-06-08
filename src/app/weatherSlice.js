import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherAPI";

const initialState = {
  status: "loading",
  data: [],
  selectedWeather: [],
};

export const getAllData = createAsyncThunk(async () => {
  const response = weatherApi.useGetAllQuery();
  return response.data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllData.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export const selectedWeather = (state) => state.weather.selectedWeather;

export default weatherSlice.reducer;
