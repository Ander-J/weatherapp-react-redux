import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectedWeather } from "../app/weatherSlice";
import { useParams } from "react-router-dom";
import { useGetByIdQuery } from "../services/weatherAPI";
import NoPage from "./NoPage";
import { Box, Grid, LinearProgress, Paper } from "@mui/material";
import styles from "../styles/View.module.css";

const View = () => {
  const weather = useSelector(selectedWeather);
  let params = useParams();

  return (
    <>
      {weather.id != null ? (
        <>
          <Box
            sx={{
              flexGrow: 1,
              margin: "20px",
            }}
          >
            <Grid container rowSpacing={1} columnSpacing={1}>
              <Grid item xs={12}>
                <Paper variant="outlined" className={styles.detailsBox}>
                  <p className={styles.bigDetails}>{weather.location}</p>
                  <p className={styles.smallDetails}>{weather.longName}</p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper variant="outlined">
                  <p className={styles.bigDetails}>Currently</p>
                  <p className={styles.mediumDetails}>{weather.weather}</p>
                  <p className={styles.smallDetails}>{weather.weatherDesc}</p>
                  <p className={styles.smallDetails}>
                    Temperature: {weather.temp} C°
                  </p>
                  <p className={styles.smallDetails}>
                    Wind: {weather.windSpeed} m/s
                  </p>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper variant="outlined">
                  <p className={styles.bigDetails}>Today</p>
                  <p className={styles.smallDetails}>
                    Clouds: {weather.dailyClouds} %
                  </p>
                  <p className={styles.smallDetails}>
                    Risk of rain: {weather.dailyPOP} %
                  </p>
                  <p className={styles.smallDetails}>
                    Humidity: {weather.humidity} %
                  </p>
                  <p className={styles.smallDetails}>
                    Max temperature: {weather.maxTemp} C°
                  </p>
                  <p className={styles.smallDetails}>
                    Min temperature: {weather.minTemp} C°
                  </p>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          {/* <h1>{weather.location}</h1>
          <h1>Temperature: {weather.temp}</h1> */}
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1>{data.location}</h1>
              <h2>{data.longName}</h2>
            </Grid>
            <Grid item xs={6}>
              <h2>{data.weather}</h2>
            </Grid>
            <Grid item xs={6}>
              <h2>{data.weatherDesc}</h2>
            </Grid>
          </Grid>
          {/* <h1>{data.location}</h1>
          <h1>Temperature: {data.temp} C°</h1> */}
        </>
      )}
      {error && <NoPage />}
      {isLoading && <LinearProgress />}
    </>
  );
};

export default View;
