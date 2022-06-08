import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/weatherapp/",
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      //gets current data
      query: () => "weather",
    }),
    updateWeather: builder.query({
      //updates current weather conditions and gets data
      query: () => "weather/update",
    }),
    newWeather: builder.mutation({
      //adds new location and gets conditions for the location
      query: (weather) => ({
        url: "weather/new",
        method: "POST",
        body: weather,
      }),
    }),
    deleteWeather: builder.mutation({
      //deletes location and its data
      query: (id) => ({
        url: `weather/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllQuery,
  useUpdateWeatherQuery,
  useNewWeatherMutation,
  useDeleteWeatherMutation,
} = weatherApi;
