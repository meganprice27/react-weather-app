import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <div className="time-forecast">
                <FormattedDate date={props.data.date} />
                <div className="text-capitalize">
                  , {props.data.description}
                </div>
              </div>
            </li>
            <li>
              <strong>Humidity:</strong> {Math.round(props.data.humidity)}%{" "}
              <strong>Wind:</strong> {props.data.wind} km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <div className="temperature-display">
            <WeatherIcon code={props.data.icon}/>
            <div className="temperature">
              {Math.round(props.data.temperature)}
            </div>
            <div className="unit">°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
