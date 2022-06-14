import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedWeather } from "../app/weatherSlice";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../services/weatherAPI";
import NoPage from "./NoPage";

const View = () => {
  const weather = useSelector(selectedWeather);
  let params = useParams();

  return (
    <>
      {weather.id != null ? (
        <>
          {console.log("using local data")}
          <h1>{weather.location}</h1>
          <h1>Temperature: {weather.temp}</h1>
        </>
      ) : (
        GetFromParams(params.id)
      )}
    </>
  );
};

const GetFromParams = (id) => {
  const { data, error, isLoading, isSuccess } = useGetByIdQuery(id);

  return (
    <>
      {isSuccess && (
        <>
          {console.log("fetching data")}
          <h1>{data.location}</h1>
          <h1>Temperature: {data.temp}</h1>
        </>
      )}
      {error && <p>An error occured</p>}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default View;
