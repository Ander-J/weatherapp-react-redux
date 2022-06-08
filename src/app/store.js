import { configureStore } from "@reduxjs/toolkit";
import { weatherSlice } from "./weatherSlice";
import { weatherApi } from "../services/weatherAPI";

export const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
