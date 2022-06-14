import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./View";
import { useSelector } from "react-redux";
import weatherSlice, {
  selectedWeather,
  setSelectedWeather,
} from "../app/weatherSlice";
import { store } from "../app/store";
import { useGetAllQuery, weatherApi } from "../services/weatherAPI";
import { useDispatch } from "react-redux";

function getData(id, location, lat, lon, temp, weather) {
  return { id, location, lat, lon, temp, weather };
}

const rows = [
  getData(1, "Tallinn", "23.2", "32.2", 16.5, "Sunny"),
  getData(2, "Tartu", "23.2", "32.2", 16.5, "Sunny"),
  getData(3, "Helsinki", "23.2", "32.2", 16.5, "Sunny"),
  getData(4, "London", "23.2", "32.2", 16.5, "Sunny"),
];

function List() {
  const [isShowView, setShowView] = useState(false);
  const { data, error, isLoading, isSuccess } = useGetAllQuery();
  const dispatch = useDispatch();
  const weather = useSelector(selectedWeather);
  const navigate = useNavigate();
  /* const [weather, setWeather] = useState(null); */
  /* useEffect(() => {

  }, [weatherData]) */

  return (
    <div>
      {isSuccess && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>Temperature</TableCell>
                <TableCell>Conditions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  hover="true"
                  onMouseEnter={() => {
                    dispatch(setSelectedWeather(row));
                    /* setWeather(row); */
                    setShowView(true);
                    {
                      console.log(weather);
                      /* console.log(store.getState(selectedWeather.data)); */
                    }
                  }}
                  onMouseLeave={() => setShowView(false)}
                  onClick={() => navigate(`/view/${row.id}`)}
                >
                  <TableCell component="th" scope="row">
                    {row.location}
                  </TableCell>
                  <TableCell>{row.temp}</TableCell>
                  <TableCell>{row.weather}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {error && <p>An error occured</p>}
      {isLoading && <p>Loading...</p>}
      {isShowView && <View />}
    </div>
  );
}

export default List;
