import { useEffect, useState } from "react";
import { selectedWeather } from "../app/weatherSlice";

const View = (weather) => {
  /* const [selectedWeather, setSelectedWeather] = useState(null) */
  /* useEffect(() => {}, [selectedWeather]); */
  const isWeatherData = () => {
    if (weather.data == undefined) {
      return false;
    } else return true;
  };
  const isWeather = isWeatherData();
  return (
    <>
      {isWeather && (
        <>
          {console.log(weather)}
          <h1>{weather.data.location}</h1>
          <h1>Temperature: {weather.data.temp}</h1>
        </>
      )}
      {!isWeather && <p>No data!</p>}
    </>
  );
};

export default View;
