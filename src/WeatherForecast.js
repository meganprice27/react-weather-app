import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "c3a184e34eb028a0c58e461odf7dt8e2";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Tue</div>{" "}
          <WeatherIcon code="snow-day" size={45} />{" "}
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">
              <strong>19°</strong>
            </span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
