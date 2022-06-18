import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherApi } from "../services/weatherAPI";

const initialState = {
  status: "loading",
  data: [],
  selectedWeather: { id: null },
};

const getAllData = createAsyncThunk(async () => {
  const response = await weatherApi.getAll();
  return response.data;
});

const getById = createAsyncThunk(async (id) => {
  const response = await weatherApi.getById(id);
  return response.data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSelectedWeather: (state, action) => {
      state.selectedWeather = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    /* updateData: (state, action) => {
      state.data = 
    } */
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

export const data = (state) => state.weather.data;

export const selectedWeather = (state) => state.weather.selectedWeather;

export const { setSelectedWeather, setData } = weatherSlice.actions;

export default weatherSlice.reducer;
