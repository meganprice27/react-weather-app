import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-1">
            <input type="submit" value="search" />
          </div>
        </div>
      </form>

      <h1>London</h1>
      <ul>
        <li>Thursday 16:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
          />
          4°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 6 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
