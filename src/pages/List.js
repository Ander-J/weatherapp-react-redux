import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  CircularProgress,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Alert,
  Divider,
} from "@mui/material";
import React, { useEffect, useReducer, useState, useRef } from "react";
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
import { Delete, Refresh } from "@mui/icons-material";
import styles from "../styles/List.module.css";

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
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  return (
    <>
      <div className={styles.table}>
        {isSuccess && (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Location</TableCell>
                  <TableCell>Temperature</TableCell>
                  <TableCell>Conditions</TableCell>
                  <TableCell align="right">
                    <Button variant="contained">
                      <Refresh />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              {data.length > 0 ? (
                <>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow
                        key={row.id}
                        hover={true}
                        onMouseEnter={() => {
                          dispatch(setSelectedWeather(row));
                          setShowView(true);
                        }}
                        onMouseLeave={() => setShowView(false)}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          onClick={() => navigate(`/view/${row.id}`)}
                        >
                          {row.location}
                        </TableCell>
                        <TableCell onClick={() => navigate(`/view/${row.id}`)}>
                          {row.temp} C°
                        </TableCell>
                        <TableCell onClick={() => navigate(`/view/${row.id}`)}>
                          {row.weather}
                        </TableCell>
                        <TableCell align="right">
                          <Button variant="outlined" color="error">
                            <Delete />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </>
              ) : (
                <>
                  <TableBody>
                    <TableRow>
                      <TableCell>Empty Table</TableCell>
                    </TableRow>
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
        )}
        <Accordion
          square={true}
          disableGutters={true}
          onTransitionEnd={() => {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <AccordionSummary>Add location...</AccordionSummary>
          <AccordionDetails>
            <TextField
              variant="standard"
              label="New location"
              ref={bottomRef}
            />
            <Button
              variant="contained"
              sx={{ marginLeft: "1em", marginTop: "1em" }}
            >
              Add...
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
      <Divider />
      {error && <p>An error occured</p>}
      {isLoading && <LinearProgress />}
      {isShowView && <View />}
    </>
  );
}

export default List;
