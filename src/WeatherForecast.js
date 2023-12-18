import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
