import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedWeather: [],
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

export const selectedWeather = (state) => state.weather.selectedWeather;
