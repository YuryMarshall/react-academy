import React from "react";
import { useState, useEffect } from "react";

import Settings from "../atoms/SettingConstructor.jsx";

import styles from "./styles/weathertable.module.css";

function GeoIp() {
  const [cityData, changeCity] = useState(null);

  const API_startpoint = `https://api.openweathermap.org/data/2.5/weather?q=`;

  const API_endpoint = `&appid=0a559540ef937280cdde51f15160a2fb`;
  const apiWeather = (location) => {
    fetch(`${API_startpoint} + ${location} + ${API_endpoint}`)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        if (data.cod === "404" || data.cod === "400") {
          console.log(data.message);

          changeCity(null);
        } else {
          changeCity(data);
        }
      });
  };
  const apiCity = () => {
    fetch(
      "https://ipgeolocation.abstractapi.com/v1/?api_key=1215a658f58545b8bd2dd8f5adff5e4b"
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        apiWeather(data.city);
      });
  };

  useEffect(() => {
    apiCity();
  }, []);

  return (
    <div className={styles.weather__container}>
      <div className={styles.name__container}>
        <h1 className={styles.city__name}>
          {cityData ? cityData.name : "No data"}
        </h1>
        <img
          src={
            cityData
              ? "https://openweathermap.org/img/wn/" +
                cityData.weather[0]["icon"] +
                "@2x.png"
              : null
          }
          alt="weather"
          className={styles.weather__img}
        />

        <h2 className={styles.weather__description}>
          {cityData ? cityData.weather[0]["description"] : "No data"}
        </h2>
      </div>
      <div className={styles.temperature__container}>
        <p className={styles.temperature}>
          {cityData ? Math.round(cityData.main.temp - 273) + "°С" : "No data"}
        </p>

        <Settings data={cityData} />
      </div>
    </div>
  );
}

export default GeoIp;
