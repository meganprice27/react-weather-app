import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-bar"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-8">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>
                <div className="time-forecast">
                  <FormattedDate date={weatherData.date} />
                  <div className="text-capitalize">
                    , {weatherData.description}
                  </div>
                </div>
              </li>
              <li>
                <strong>Humidity:</strong> {Math.round(weatherData.humidity)}%{" "}
                <strong>Wind:</strong> {weatherData.wind} km/h
              </li>
            </ul>
          </div>
          <div className="col-4">
            <div className="temperature-display">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <div className="temperature">
                {Math.round(weatherData.temperature)}
              </div>
              <div className="unit">°C</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "c3a184e34eb028a0c58e461odf7dt8e2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
