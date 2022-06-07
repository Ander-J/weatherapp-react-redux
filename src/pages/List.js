import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "./View";
import { selectedWeather } from "../app/weatherSlice";
import { store } from "../app/store";

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
  const navigate = useNavigate();

  return (
    <div>
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
            {rows.map((row) => (
              <TableRow
                key={row.id}
                hover="true"
                onMouseEnter={() => setShowView(true)}
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
      {isShowView && <View />}
    </div>
  );
}

export default List;
