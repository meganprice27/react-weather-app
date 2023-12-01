import React from "react";
import "./Weather.css";

export default function Weather() {
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

      <h1>London</h1>
      <ul className="time-weather">
        <li>Thursday 16:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
          <span className="temperature">4°C</span>
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>Precipitation:</strong> 1%
            </li>
            <li>
              <strong>Humidity:</strong> 70%
            </li>
            <li>
              <strong>Wind:</strong> 6 km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
