import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedWeather } from "../app/weatherSlice";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../services/weatherAPI";
import NoPage from "./NoPage";
import { LinearProgress } from "@mui/material";

const View = () => {
  const weather = useSelector(selectedWeather);
  let params = useParams();

  return (
    <>
      {weather.id != null ? (
        <>
          <h1>{weather.location}</h1>
          <h1>Temperature: {weather.temp}</h1>
        </>
      ) : (
        GetFromParams(params.id)
      )}
    </>
  );
};
/** Makes sure that data still loads even if you don't navigate here from List.
 *  If selectedWeather in memory is null, then fetch it from backend using params
 *  in the method below.
 */
const GetFromParams = (id) => {
  const { data, error, isLoading, isSuccess } = useGetByIdQuery(id);

  return (
    <>
      {isSuccess && (
        <>
          <h1>{data.location}</h1>
          <h1>Temperature: {data.temp}</h1>
        </>
      )}
      {error && <NoPage />}
      {isLoading && <LinearProgress />}
    </>
  );
};

export default View;
